import MobileSelector from "../../components/Inputs/MobileSelector";
import Card from "../../components/Card/Card";
import { StyleSheet } from "react-native";
import ReusableDetails, { SelectorArray } from "./ReusableDetails";
import { RefObject, useEffect, useRef, useState } from "react";
import CardText from "../../components/Card/CardHeader";
import PhoneButton from "../../components/Inputs/PhoneButton";
import { useNavigation } from "@react-navigation/native";
import { physicalDetails } from "./Classes/Details";
import { useRoute } from "@react-navigation/native";
import Navigation from "../../objects/NavigationType";
import SetMargin from "../../functions/SetMargin";
import ModalPopup from "../../components/Modal/Modal";
import { Modal } from "react-native";

export default function StandardDetails({ route }: any) {
  interface DataDetails {
    age: string;
    sex: string;
    weight: string;
  }
  const [age, setAge] = useState<string>("");
  const [sex, setSex] = useState<string>("Female");
  const [weight, setWeight] = useState<string>("");
  const [data, setData] = useState<any>([]);
  const [selectors, setSelectors] = useState<any>();
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const navigation = useNavigation();

  const handleTrans = () => {
    setModalVisible(true)
  };

  const handleClose = () => {
    setModalVisible(false);
  };

  return (
    <Card scrollable={false} containerClass={styles.container}>
      <CardText
        text="Step 2 of 5"
        textStyle={styles.header}
        container={styles.headerContainer}
      />
      <Card scrollable={false} containerClass={styles.container}>
        <ReusableDetails
          data={setData}
          selectorArray={physicalDetails}
          header={"Your Physical Info."}
        />
        <PhoneButton
          onPress={data.length === 3 ? () => Navigation({navigation}, 'fitness-goals') : handleTrans}
          buttonClass={styles.button}
          buttonContainerClass={styles.buttonContainer}
          text="Next"
          textClass={styles.buttonText}
        />
        {modalVisible && (
          <ModalPopup details="" visible={modalVisible} onClose={handleClose} />
        )}
      </Card>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: SetMargin(-0.15),
    marginTop: SetMargin(0.15),
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    letterSpacing: 1.15,
  },
  buttonContainer: {
    backgroundColor: "blue",
    marginTop: SetMargin(0.03),
    borderRadius: 15,
    borderStyle: "solid",
    borderWidth: 2,
  },
  button: {
    padding: 15,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 1.15,
    color: "white",
  },
});
