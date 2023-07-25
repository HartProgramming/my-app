import Card from "../../../components/Card/Card";
import { StyleSheet } from "react-native";
import CardText from "../../../components/Card/CardText";
import Navigation from "../../../objects/NavigationType";
import { useNavigation } from "@react-navigation/native";
import SetMargin from "../../../functions/SetMargin";
import { useEffect, useState } from "react";
import MainRegimenButton from "../Components/Buttons/MainRegimenButton";
import { Image, Text } from "react-native";
import PhoneButton from "../../../components/Inputs/PhoneButton";
import OnDeckButton from "../Components/Buttons/OnDeckButton";
import Chicken from "../../../images/cardimages/chickenbreast.jpeg";

export default function MainRegimen() {
  const navigation = useNavigation(); 

  const [addImage, setAddImage] = useState<any>();
  const [imageHeader, setImageHeader] = useState<string>("");

  const handleAdd = () => {};

  const handleOnDeckImage = (event: string) => {
    if (event === "Meal") {
      setImageHeader("Chicken");
    } else if (event === "Exercise") {
      setImageHeader("Jogging");
    }
  };

  useEffect(() => {
    setImageHeader("Chicken");
  }, []);

  return (
    <Card scrollable={false} containerClass={styles.container}>
      <Card scrollable={false} containerClass={styles.onDeckContainer}>
        <Card scrollable={false} containerClass={styles.onDeckHeaderContainer}>
          <CardText
            text="On Deck"
            container={styles.headerContainer}
            textStyle={styles.onDeckHeader}
          />
          <Card
            scrollable={false}
            containerClass={styles.onDeckButtonsContainer}
          >
            <OnDeckButton
              onPress={() => handleOnDeckImage("Meal")}
              left={false}
              label="Meal"
            />
            <OnDeckButton
              onPress={() => handleOnDeckImage("Exercise")}
              left={true}
              label="Exercise"
            />
          </Card>
        </Card>
        <Card scrollable={false} containerClass={styles.onDeckImageContainer}>
          <CardText
            container={styles.imageHeaderContainer}
            textStyle={styles.imageHeader}
            text={imageHeader}
          />
          <Image source={Chicken} style={styles.onDeckImage} />
          <PhoneButton
            buttonContainerClass={styles.onDeckAddButtonContainer}
            buttonClass={styles.onDeckAddButton}
            textClass={styles.onDeckAddButtonText}
            onPress={handleAdd}
            text="Add"
          />
        </Card>
      </Card>
      <Card scrollable={false} containerClass={styles.buttonsContainer}>
        <MainRegimenButton
          label="Search"
          left={false}
          onPress={Navigation({ navigation }, "search")}
        />
        <MainRegimenButton
          label="Create"
          left={true}
          onPress={Navigation({ navigation }, "create")}
        />
      </Card> 
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonsContainer: {
    marginTop: SetMargin(0.3),
    flexDirection: "row",
    width: "100%",
  },
  recentContainer: {
    marginTop: SetMargin(0.1),
  },
  recentHeaderContainer: {
    alignSelf: "center",
  },
  recentHeader: {
    fontSize: 28,
    fontWeight: "bold",
    letterSpacing: 1.2,
  },
  detailsContainer: {
    marginTop: SetMargin(0.01),
    paddingBottom: 5,
  },
  detailsHeaderContainer: {},
  detailsHeader: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1.1,
  },
  recentImagesContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  onDeckContainer: {
    flex: 1,
  },
  onDeckHeaderContainer: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "center",
    marginTop: SetMargin(0.02),
    marginBottom: SetMargin(-0.02),
  },
  headerContainer: {
    width: "35%",
  },
  onDeckHeader: {
    fontSize: 28,
    fontWeight: "bold",
  },
  onDeckButtonsContainer: {
    flexDirection: "row",
    width: "60%",
  },
  onDeckImageContainer: {},
  imageHeaderContainer: {
    backgroundColor: "rgba(255,255,255,.7)",
    width: "95%",
    alignSelf: "center",
    alignItems: "center",
    position: "absolute",
    marginTop: SetMargin(0.04),
    zIndex: 2,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 5,
  },
  imageHeader: {
    fontSize: 28,
    color: "black",
    fontWeight: "bold",
    letterSpacing: 1.15,
  },
  onDeckImage: {
    width: "95%",
    height: SetMargin(0.3),
    alignSelf: "center",
    borderRadius: 25,
    marginTop: SetMargin(0.04),
  },
  onDeckAddButtonContainer: {
    position: "absolute",
    marginTop: SetMargin(0.29),
    width: "35%",
    marginLeft: SetMargin(0.305),
  },
  onDeckAddButton: {
    backgroundColor: "rgba(0,0,0,.5)",
    alignItems: "center",
    padding: 5,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  onDeckAddButtonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    letterSpacing: 1.1,
  },
});
