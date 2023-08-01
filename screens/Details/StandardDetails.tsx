import Card from "../../components/Card/Card";
import { StyleSheet } from "react-native";
import ReusableDetails, { SelectorArray } from "./ReusableDetails";
import { useEffect, useState } from "react";
import CardText from "../../components/Card/CardText";
import PhoneButton from "../../components/Inputs/PhoneButton";
import { useNavigation } from "@react-navigation/native";
import { physicalDetails } from "./Classes/Details";
import Navigation from "../../objects/NavigationType";
import SetMargin from "../../functions/SetMargin";
import ModalPopup from "../../components/Modal/Modal";
import { MaterialIcons } from "@expo/vector-icons";

export type physicalInfoProps = "Update" | "Sign Up";

export type physicalInfo = { component: physicalInfoProps };

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
  const [navigate, setNavigate] = useState<boolean>(false);

  const component = route.params;

  useEffect(() => {
    console.log(data)
    if (navigate) {
      Navigation({ navigation }, "physical-fitness");
    }
  }, [data]);

  const navigation = useNavigation();

  const handlePostSave = () => {
    if(component === 'Update'){
      /* Save Details and Send to Backend */
    }else if(component === 'Sign Up'){
      /* Save Details and transition to next screen */
    }
    /* Send Details to the backend */
  };

  const handleTransition = () => {
    console.log("transition");
  };

  const handleClose = () => {
    setModalVisible(false);
  };

  return (
    <Card scrollable={false} containerClass={styles.container}>
      <Card scrollable={false} containerClass={styles.container}>
        {component === 'Sign Up' && (
          <CardText semiBold text="Step 2 of 5" container={styles.stepsContainer} textStyle={styles.stepsHeader} />
        )}
        <ReusableDetails
          data={setData}
          selectorArray={physicalDetails}
          header={"Your Physical Info."}
        />
        <PhoneButton
          semiBold
          onPress={
            data.length === 3 && component === "Sign Up"
              ? Navigation({navigation}, 'fitness-goals')

              : data.length === 3 && component === "Update"
              ? handlePostSave
              : () => setModalVisible(true) 
          }
          buttonClass={styles.button}
          buttonContainerClass={styles.buttonContainer}
          text={component === "Sign Up" ? "Next" : "Save"}
          textClass={styles.buttonText}
        />
        {modalVisible && (
          <ModalPopup details="" visible={modalVisible} onClose={handleClose} />
        )}
      </Card>
        <Card scrollable={false} containerClass={styles.backCard}>
          <PhoneButton
            semiBold
            onPress={
              component === 'Update' ? Navigation({navigation}, 'update-info')
              : Navigation({navigation}, 'fitness-goals')
            }
            text=""
            buttonClass={styles.backButton}
            buttonContainerClass={styles.backButtonContainer}
            textClass={styles.backButtonText}
            image={
              <MaterialIcons
                name="keyboard-arrow-left"
                size={50}
                color={"black"}
              />
            }
          />
        </Card>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "white",
  },
  stepsContainer: {
    marginBottom: SetMargin(-.14),
    marginTop: SetMargin(.14)
  },
  stepsHeader: {
    fontSize: 28
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
    backgroundColor: "black",
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
    letterSpacing: 1.15,
    color: "white",
  },
  backCard: {
    width: "90%",
  },
  backButtonContainer: {
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  backButton: {},
  backButtonText: {},
});
