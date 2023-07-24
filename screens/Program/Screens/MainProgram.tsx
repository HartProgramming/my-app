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

 
export default function MainProgram() {
  const [programArray, setProgramArray] = useState<any>([]);
  const [programElement, setProgramElement] = useState<any>([]);
  const [counter, setCounter] = useState<number>(0);
  const [currentProgramObject, setCurrentProgramObject] = useState<any>({});
  const [currentProgramCard, setCurrentProgramCard] = useState<any>();

  const navigation = useNavigation();

  useEffect(() => {
    setCurrentProgramObject({
      id: "M8",
      title: "ProteinMuscle",
      image: Chicken,
      cycle: "1 Week",
      author: "Melissa Barnes",
      info: "This is a meal/exercise program designed specifically for beginners. Meals are affordable and exercises are hard enough to lose the weight...",
      price: "9.99",
    });
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
        cardImage={currentProgramObject.image}
        title={currentProgramObject.title}
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
      cycle: "1 Week",
      container: styles.programCardContainer,
      price: "14.99",
      info: "This is a combination program with a meal and exercise scheduled that is designed to optimize weight loss and building some tone.",
      author: "Melinda Ross",
      id: "M1",
    },
    {
      cardImage: Chicken,
      title: "Tone Up",
      cycle: "2 Week",
      container: styles.programCardContainer,
      price: "4.99",
      info: "This is a combination program with a meal and exercise scheduled that is designed to optimize weight loss and building some tone.",
      author: "Melinda Ross",
      id: "M2",
    },
    {
      cardImage: Jogging,
      title: "Supreme Lean",
      cycle: "1 Week",
      container: styles.programCardContainer,
      price: "4.99",
      info: "This is a combination program with a meal and exercise scheduled that is designed to optimize weight loss and building some tone.",
      author: "Frank Castle",
      id: "M3",
    },
    {
      cardImage: Chicken,
      title: "Heavy Protein",
      cycle: "1 Week",
      container: styles.programCardContainer,
      price: "2.99",
      info: "This is a combination program with a meal and exercise scheduled that is designed to optimize weight loss and building some tone.",
      author: "Melinda Ross",
      id: "M4",
    },
    {
      cardImage: Jogging,
      title: "Supreme Lean",
      cycle: "3 Days",
      container: styles.programCardContainer,
      price: "1.99",
      info: "This is a combination program with a meal and exercise scheduled that is designed to optimize weight loss and building some tone.",
      author: "Dipshit Believer",
      id: "M5",
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
        {currentProgramCard}
      </Card>
      <Card scrollable={false} containerClass={styles.buttonsContainer}>
        <NestedNavigation fontType="semiBold" route='available-programs' mainRoute={'Program Navigation'} component={AvailablePrograms} container={styles.nestedContainer} button={styles.nestedButton} textStyle={styles.nestedText} label="Available" />
        <NestedNavigation fontType="semiBold" route='create-program' mainRoute="Program Navigation" component={CreateProgram} container={styles.nestedContainer} button={styles.nestedButton} textStyle={styles.nestedText} label="Create" />
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
    flexDirection: 'column'
  },
  nestedContainer: {
    alignSelf: 'center',
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderStyle: 'solid',
    borderColor: 'black'
},
nestedButton: {
    height: SetMargin(.17),
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center'
},
nestedText: {
    fontSize: 30,
    color: 'black',
    letterSpacing: 1
}
});
