import { StyleSheet } from "react-native";
import Card from "../../../components/Card/Card";
import ProgramCard from "../Components/Card/ProgramCard";
import Jogging from "../../../images/cardimages/joggingstreet.jpeg";
import Chicken from "../../../images/cardimages/chickenbreast.jpeg";
import { ProgramCardProps } from "../Components/Card/ProgramCard";
import { useEffect, useRef, useState } from "react";
import Navigation from "../../../objects/NavigationType";
import SetMargin from "../../../functions/SetMargin";
import CardText from "../../../components/Card/CardText";
import { FlatList, PanResponder, View, Animated } from "react-native";
import React from "react";
import MainProgramButton from "../Components/Button/MainProgramButton";
import { useNavigation } from "@react-navigation/native";
import ProgramNavigation from "../Navigation/ProgramNavigation";
import NestedNavigation from "../../../components/NavigationStack/NestedNavigation";
import AvailablePrograms from "./AvailablePrograms";
import CreateProgram from "./CreateProgram";
import PhoneButton from "../../../components/Inputs/PhoneButton";

export default function MainProgram() {
  const [programArray, setProgramArray] = useState<any>([]);
  const [programElement, setProgramElement] = useState<any>([]);
  const [counter, setCounter] = useState<number>(0);
  const [currentProgramObject, setCurrentProgramObject] = useState<any>({});
  const [currentProgramCard, setCurrentProgramCard] = useState<any>();
  const [displayDetailsModal, setDisplayDetailsModal] = useState<any>();

  const navigation = useNavigation();

  useEffect(() => {
    setCurrentProgramObject(programDetailsArray[0]);
  }, []);

  useEffect(() => {
    setCurrentProgramCard(
      <ProgramCard
        id={currentProgramObject.id}
        author={currentProgramObject.author}
        info={currentProgramObject.info}
        price={currentProgramObject.price}
        container={styles.programCardContainer}
        cycle={currentProgramObject.cycle}
        cardImage={currentProgramObject.cardImage}
        title={currentProgramObject.title}
        detailsModal={currentProgramObject.detailsModal}
        review={currentProgramObject.review}
        budget={currentProgramObject.budget}
        programType={currentProgramObject.programType}
        userType={currentProgramObject.userType}
      />
    );
  }, [currentProgramObject]);

  useEffect(() => {
    setProgramElement([programDetailsArray[0]]);
    console.log(programElement);
    console.log(programArray);
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
      <Card scrollable={false} containerClass={styles.currentProgramContainer}>
        <CardText
          semiBold
          container={styles.currentHeaderContainer}
          textStyle={styles.currentHeader}
          text="Current"
        />
        <Card scrollable={false} containerClass={styles.highlightedContainer}>
          {currentProgramCard}
        </Card>
      </Card>
      <Card scrollable={false} containerClass={styles.buttonsContainer}>
       <PhoneButton semiBold onPress={Navigation({navigation}, 'available-programs')} buttonContainerClass={styles.nestedContainer} buttonClass={styles.nestedButton} textClass={styles.nestedText} text="Available" />
       <PhoneButton semiBold onPress={Navigation({navigation}, 'create-program')} buttonContainerClass={styles.nestedContainer} buttonClass={styles.nestedButton} textClass={styles.nestedText} text="Create" />
      </Card>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
  programCardContainer: {
    flexDirection: "row",
    width: "100%",
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderColor: "black",
    height: SetMargin(0.22),
  },
  currentProgramContainer: {},
  currentHeaderContainer: {
    width: "85%",
    alignSelf: "center",
  },
  currentHeader: {
    fontSize: 30,
  },
  buttonsContainer: {
  },
  nestedContainer: {
    alignSelf: "center",
    width: "100%",
    alignItems: "center",
    borderBottomWidth: 2,
    borderStyle: "solid",
    borderColor: "black",
  },
  nestedButton: {
    height: SetMargin(0.17),
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    backgroundColor: 'white'
  },
  nestedText: {
    fontSize: 30,
    color: "black",
    letterSpacing: 1,
  },
});
