import { StyleSheet } from "react-native";
import Card from "../../../../components/Card/Card";
import ProgramCard from "../../Components/Card/ProgramCard";
import Jogging from "../../../../images/cardimages/joggingstreet.jpeg";
import Chicken from "../../../../images/cardimages/chickenbreast.jpeg";
import { ProgramCardProps } from "../../Components/Card/ProgramCard";
import { useEffect, useRef, useState } from "react";
import Navigation from "../../../../objects/NavigationType";
import SetMargin from "../../../../functions/SetMargin";
import CardText from "../../../../components/Card/CardText";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import PhoneButton from "../../../../components/Inputs/PhoneButton";

export default function MainProgram() {
  const [counter, setCounter] = useState<number>(0);
  const [currentProgramObject, setCurrentProgramObject] = useState<any>({});
  const [currentProgramCard, setCurrentProgramCard] = useState<JSX.Element>();
  const [displayDetailsModal, setDisplayDetailsModal] = useState<any>();

  const navigation = useNavigation();

  useEffect(() => {
    setCurrentProgramCard(
      <ProgramCard
        id={programDetailsArray[0].id}
        author={programDetailsArray[0].author}
        info={programDetailsArray[0].info}
        price={programDetailsArray[0].price}
        container={styles.programCardContainer}
        cycle={programDetailsArray[0].cycle}
        cardImage={programDetailsArray[0].cardImage}
        title={programDetailsArray[0].title}
        detailsModal={programDetailsArray[0].detailsModal}
        review={programDetailsArray[0].review}
        budget={programDetailsArray[0].budget}
        programType={programDetailsArray[0].programType}
        userType={programDetailsArray[0].userType}
      />
    );
  }, []);

  const programDetailsArray: ProgramCardProps[] = [
    {
      cardImage: Jogging,
      title: "Supreme Lean",
      cycle: 2,
      container: styles.programCardContainer,
      price: 14.99,
      info: "This is a combination program with a meal and exercise scheduled that is designed to optimize weight loss and building some tone.",
      author: "Melinda Ross",
      id: "M1",
      budget: 3,
      review: 3,
      userType: "User",
      programType: "Complete",
      detailsModal: displayDetailsModal,
    },
    {
      cardImage: Chicken,
      title: "Tone Up",
      cycle: 7,
      container: styles.programCardContainer,
      price: 4.99,
      info: "This is a combination program with a meal and exercise scheduled that is designed to optimize weight loss and building some tone.",
      author: "Melinda Ross",
      id: "M2",
      budget: 3,
      review: 3,
      userType: "User",
      programType: "Complete",
      detailsModal: displayDetailsModal,
    },
    {
      cardImage: Jogging,
      title: "Supreme Lean",
      cycle: 7,
      container: styles.programCardContainer,
      price: 3.99,
      info: "This is a combination program with a meal and exercise scheduled that is designed to optimize weight loss and building some tone.",
      author: "Frank Castle",
      id: "M3",
      budget: 3,
      review: 3,
      userType: "User",
      programType: "Complete",
      detailsModal: displayDetailsModal,
    },
    {
      cardImage: Chicken,
      title: "Heavy Protein",
      cycle: 7,
      container: styles.programCardContainer,
      price: 2.99,
      info: "This is a combination program with a meal and exercise scheduled that is designed to optimize weight loss and building some tone.",
      author: "Melinda Ross",
      id: "M4",
      budget: 3,
      review: 3,
      userType: "User",
      programType: "Complete",
      detailsModal: displayDetailsModal,
    },
    {
      cardImage: Jogging,
      title: "Supreme Lean",
      cycle: 7,
      container: styles.programCardContainer,
      price: 1.99,
      info: "This is a combination program with a meal and exercise scheduled that is designed to optimize weight loss and building some tone.",
      author: "Dipshit Believer",
      id: "M5",
      budget: 3,
      review: 3,
      userType: "User",
      programType: "Complete",
      detailsModal: displayDetailsModal,
    },
  ];

  return (
    <Card scrollable={false} containerClass={styles.container}>
      <CardText
        semiBold={true}
        text="Featured"
        container={styles.headerContainer}
        textStyle={styles.header}
      />
      <Card scrollable={false} containerClass={styles.highlightedContainer}>
        {currentProgramCard}
      </Card>
      <CardText
        semiBold
        container={styles.currentHeaderContainer}
        textStyle={styles.currentHeader}
        text="Current"
      />
      <Card scrollable={false} containerClass={styles.highlightedContainer}>
        {currentProgramCard}
      </Card>
      <Card scrollable={false} containerClass={styles.buttonsContainer}>
        <PhoneButton
          semiBold
          onPress={Navigation({ navigation }, "manage-navigation")}
          buttonContainerClass={styles.nestedContainer}
          buttonClass={styles.nestedButton}
          textClass={styles.nestedText}
          text="Manage Current"
        />
        <PhoneButton
          semiBold
          onPress={Navigation({ navigation }, "available-programs")}
          buttonContainerClass={styles.nestedContainer}
          buttonClass={styles.nestedButton}
          textClass={styles.nestedText}
          text="Tone Up Shop"
        />
        <PhoneButton
          semiBold
          onPress={Navigation({ navigation }, "create-navigation")}
          buttonContainerClass={styles.nestedContainer}
          buttonClass={styles.nestedButton}
          textClass={styles.nestedText}
          text="Create Program"
        />
      </Card>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  item: {
    width: "100%",
    height: "100%",
  },
  headerContainer: {
    width: "85%",
    marginTop: SetMargin(0.1),
    alignSelf: "center",
  },
  header: {
    fontSize: 30,
  },
  highlightedContainer: {
    flex: 1,
  },
  programCardContainer: {
    flexDirection: "column",
    width: "100%",
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderColor: "black",
    height: SetMargin(0.21),
    justifyContent: "space-between",
  },
  currentProgramContainer: {},
  currentHeaderContainer: {
    width: "85%",
    alignSelf: "center",
  },
  currentHeader: {
    fontSize: 30,
  },
  buttonsContainer: {},
  nestedContainer: {
    alignSelf: "center",
    width: "100%",
    alignItems: "center",
    borderBottomWidth: 2,
    borderStyle: "solid",
    borderColor: "black",
  },
  nestedButton: {
    height: SetMargin(0.115),
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    backgroundColor: "white",
  },
  nestedText: {
    fontSize: 30,
    color: "black",
    letterSpacing: 1,
  },
});
