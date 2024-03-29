import { StyleSheet } from "react-native";
import Card from "../../../components/Card/Card";
import Jogging from "../../../images/cardimages/joggingstreet.jpeg";
import Chicken from "../../../images/cardimages/chickenbreast.jpeg";
import ProgramCard, { ProgramCardProps } from "../Components/Card/ProgramCard";
import SetMargin from "../../../functions/SetMargin";
import CardText from "../../../components/Card/CardText";
import NavBar from "../../../components/NavBar/NavBar";
import FilterSort from "../Components/Button/FilterSort";
import { useEffect, useState } from "react";
import FilterModal, { FilterArrayProps } from "../Components/Modal/FilterModal";
import SortModal from "../Components/Modal/SortModal";
import { ProgramDetailsInterface } from "../Components/Interfaces/ProgramDetailsInterface";
import MoreDetailsModal from "../Components/Modal/MoreDetailsModal";
import { SetStateAction } from "react";
import { userAgent } from "next/server";

export default function AvailablePrograms() {
  const userTypeArray: ProgramCardProps["userType"] = ["Trainer", "User"];
  const programTypeArray: ProgramCardProps["programType"] = [
    "Exercise",
    "Meal",
    "Complete",
  ];

  const programRegimenArray: ProgramDetailsInterface[] = [
    {
      day: "Day 1",
      mealArray: [
        { time: "Breakfast", Meal: "Eggs", Calories: 300, Protein: 30 },
        { time: "Snack", Meal: "Eggs", Calories: 300, Protein: 30 },
        { time: "Lunch", Meal: "Eggs", Calories: 300, Protein: 30 },
        { time: "Snack", Meal: "Eggs", Calories: 300, Protein: 30 },
        { time: "Dinner", Meal: "Eggs", Calories: 300, Protein: 30 },
      ],
      exerciseArray: [
        { Exercise: "Jogging", Miles: 2 },
        { Exercise: "Pushups", Reps: 50 },
        { Exercise: "Planks", Minutes: 2 },
        { Exercise: "Dumbells", Reps: 25 },
        { Exercise: "Squats", Reps: 26 },
      ],
    },
    {
      day: "Day 2",
      mealArray: [
        { time: "Breakfast", Meal: "Eggs", Calories: 300, Protein: 30 },
        { time: "Snack", Meal: "Eggs", Calories: 300, Protein: 30 },
        { time: "Lunch", Meal: "Eggs", Calories: 300, Protein: 30 },
        { time: "Snack", Meal: "Eggs", Calories: 300, Protein: 30 },
        { time: "Dinner", Meal: "Eggs", Calories: 300, Protein: 30 },
      ],
      exerciseArray: [
        { Exercise: "Jogging", Miles: 2 },
        { Exercise: "Pushups", Reps: 50 },
        { Exercise: "Planks", Minutes: 2 },
        { Exercise: "Dumbells", Reps: 25 },
        { Exercise: "Squats", Reps: 26 },
      ],
    },
  ];

  const [filterModal, setFilterModal] = useState<boolean>(false);
  const [sortModal, setSortModal] = useState<boolean>(false);
  const [closeModal, setCloseModal] = useState<boolean>(false);
  const [filterCardArray, setFilterCardArray] = useState<FilterArrayProps[]>(
    []
  );
  const [sortCardArray, setSortCardArray] = useState<any>([]);
  const [moreDetailsModal, setMoreDetailsModal] = useState<any>(false);

  const programDetailsArray: ProgramCardProps[] = [
    {
      cardImage: Jogging,
      title: "Supreme Lean",
      cycle: 9,
      container: styles.programCardContainer,
      price: 14.99,
      info: "This is a combination program with a meal and exercise scheduled that is designed to optimize weight loss and building some tone.",
      author: "Tracy Biggs",
      id: "M1",
      programType: "Complete",
      userType: "User",
      detailsModal: moreDetailsModal,
      review: 5,
      budget: 3,
    },
    {
      cardImage: Chicken,
      title: "Tone Up",
      cycle: 5,
      container: styles.programCardContainer,
      price: 4.99,
      info: "This is a combination program with a meal and exercise scheduled that is designed to optimize weight loss and building some tone.",
      author: "Melinda Ross",
      id: "M2",
      programType: "Complete",
      userType: "Trainer",
      detailsModal: moreDetailsModal,
      review: 5,
      budget: 3,
    },
    {
      cardImage: Jogging,
      title: "Supreme Lean",
      cycle: 7,
      container: styles.programCardContainer,
      price: 6.99,
      info: "This is a combination program with a meal and exercise scheduled that is designed to optimize weight loss and building some tone.",
      author: "Frank Castle",
      id: "M3",
      programType: "Complete",
      userType: "User",
      detailsModal: moreDetailsModal,
      review: 5,
      budget: 3,
    },
    {
      cardImage: Chicken,
      title: "Heavy Protein",
      cycle: 21,
      container: styles.programCardContainer,
      price: 2.99,
      info: "This is a combination program with a meal and exercise scheduled that is designed to optimize weight loss and building some tone.",
      author: "Greg Throne",
      id: "M4",
      programType: "Meal",
      userType: "Trainer",
      detailsModal: moreDetailsModal,
      review: 5,
      budget: 3,
    },
    {
      cardImage: Jogging,
      title: "Supreme Lean",
      cycle: 10,
      container: styles.programCardContainer,
      price: 1.99,
      info: "This is a combination program with a meal and exercise scheduled that is designed to optimize weight loss and building some tone.",
      author: "Dipshit Believer",
      id: "M5",
      programType: "Exercise",
      userType: "Trainer",
      detailsModal: moreDetailsModal,
      review: 5,
      budget: 0,
    },
    {
      cardImage: Jogging,
      title: "Extra Lean",
      cycle: 9,
      container: styles.programCardContainer,
      price: 11.99,
      info: "This is a combination program with a meal and exercise scheduled that is designed to optimize weight loss and building some tone.",
      author: "Tracy Biggs",
      id: "M1",
      programType: "Complete",
      userType: "User",
      detailsModal: moreDetailsModal,
      review: 2,
      budget: 1,
    },
    {
      cardImage: Chicken,
      title: "Free Up",
      cycle: 8,
      container: styles.programCardContainer,
      price: 12.99,
      info: "This is a combination program with a meal and exercise scheduled that is designed to optimize weight loss and building some tone.",
      author: "Melinda Ross",
      id: "M2",
      programType: "Meal",
      userType: "Trainer",
      detailsModal: moreDetailsModal,
      review: 5,
      budget: 3,
    },
    {
      cardImage: Jogging,
      title: "Lean",
      cycle: 7,
      container: styles.programCardContainer,
      price: 6.99,
      info: "This is a combination program with a meal and exercise scheduled that is designed to optimize weight loss and building some tone.",
      author: "Frank Castle",
      id: "M3",
      programType: "Exercise",
      userType: "Trainer",
      detailsModal: moreDetailsModal,
      review: 5,
      budget: 2,
    },
    {
      cardImage: Chicken,
      title: "Protein",
      cycle: 11,
      container: styles.programCardContainer,
      price: 5.99,
      info: "This is a combination program with a meal and exercise scheduled that is designed to optimize weight loss and building some tone.",
      author: "Greg Throne",
      id: "M4",
      programType: "Meal",
      userType: "Trainer",
      detailsModal: moreDetailsModal,
      review: 5,
      budget: 3,
    },
    {
      cardImage: Jogging,
      title: "TLean",
      cycle: 10,
      container: styles.programCardContainer,
      price: 7.99,
      info: "This is a combination program with a meal and exercise scheduled that is designed to optimize weight loss and building some tone.",
      author: "Dipshit Believer",
      id: "M5",
      programType: "Exercise",
      userType: "User",
      detailsModal: moreDetailsModal,
      review: 4,
      budget: 3,
    },
  ];

  const [programArray, setProgramArray] =
    useState<ProgramCardProps[]>(programDetailsArray);

  const handleClose = () => {
    setFilterModal(false);
    setSortModal(false);
    setMoreDetailsModal(false);
  };

  useEffect(() => {
    console.log(
      filterCardArray.map((value) => [
        { value: value.value, filterType: value.filterType },
      ])
    ); 
    let filterSomeEveryArray: any = [];
    if (filterCardArray.length > 0) {
      filterSomeEveryArray.push(
        filterCardArray
          .map((value) => value.filterType)
          .filter((item, index, self) => self.indexOf(item) !== index)
      );
      if (filterSomeEveryArray.length > 0) {
        setProgramArray(
          programDetailsArray.filter((value: any) =>
            filterCardArray
              .map((item: any) => item.value)
              .every(
                (label: any) =>
                  (label === value.userType &&
                    label === value.programType &&
                    label >= value.price) ||
                  (label.userType === label && label === value.programType) ||
                  (value.userType === label && value.price <= label) ||
                  (value.programType === label && value.price <= label) ||
                  label === value.userType ||
                  label === value.programType ||
                  (label >= value.price && label - 4.99 <= value.price)
              )
          )
        );
      } else {
        setProgramArray(
          programDetailsArray.filter((value: any) =>
            filterCardArray
              .map((item: any) => item.value)
              .some(
                (label: any) =>
                  (label === value.userType &&
                    label === value.programType &&
                    label >= value.price) ||
                  (label.userType === label && label === value.programType) ||
                  (value.userType === label && value.price <= label) ||
                  (value.programType === label && value.price <= label) ||
                  label === value.userType ||
                  label === value.programType ||
                  (label >= value.price && label - 4.99 >= value.price)
              )
          )
        );
      }
    } else {
      setProgramArray(programDetailsArray);
    }
  }, [filterCardArray]);

  useEffect(() => {
    if (sortCardArray.length > 0) {
      setProgramArray((prev) =>
        programDetailsArray.sort((a, b): any =>
          sortCardArray.map((value: any) =>
            value.title === "Price" && value.value === "ascending"
              ? a.price - b.price
              : value.title === "Price" && value.value === "descending"
              ? b.price - a.price
              : value.title === "Title" && value.value === "ascending"
              ? a.title.localeCompare(b.title)
              : value.title === "Title" && value.value === "descending"
              ? b.title.localeCompare(a.title)
              : value.title === "Cycle" && value.value === "ascending"
              ? a.cycle - b.cycle
              : value.title === "Cycle" && value.value === "descending"
              ? b.cycle - a.cycle
              : a.title.localeCompare(b.title)
          )
        )
      );
    }
  }, [sortCardArray]);

  useEffect(() => {}, [programArray]);

  return (
    <Card scrollable={false} containerClass={styles.container}>
      <CardText
        semiBold
        text="Available"
        container={styles.headerContainer}
        textStyle={styles.header}
      /> 
      <Card scrollable={true} containerClass={styles.programContainer}>
        {programArray.map((value) => {
          return (
            <ProgramCard
              userType={value.userType}
              programType={value.programType}
              id={value.id}
              cardImage={value.cardImage}
              cycle={value.cycle}
              author={value.author}
              info={value.info}
              price={value.price}
              title={value.title}
              container={styles.programCardContainer}
              detailsModal={setMoreDetailsModal}
              review={value.review}
              budget={value.budget}
            />
          );
        })}
      </Card>
      <Card scrollable={false} containerClass={styles.filterSortContainer}>
        <FilterSort
          showSortModal={setSortModal}
          showFilterModal={setFilterModal}
        />
        <FilterModal
          showHide={handleClose}
          cards={setFilterCardArray}
          visible={filterModal}
        />
        <SortModal
          showHide={handleClose}
          cards={setSortCardArray}
          visible={sortModal}
        />
        <MoreDetailsModal
          showHide={handleClose}
          programArray={programRegimenArray}
          programType={programDetailsArray[0].programType}
          cardArray={programDetailsArray[0]}
          visible={moreDetailsModal}
        />
      </Card>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
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
  headerContainer: {
    alignSelf: "center",
    width: "100%",
    alignItems: "center",
    borderBottomColor: "black",
    borderStyle: "solid",
    borderBottomWidth: 2,
    marginTop: SetMargin(0.09),
  },
  header: {
    fontSize: 30,
    letterSpacing: 0.8,
  },
  programContainer: {
    flex: 1,
  },
  filterSortContainer: {
    flexDirection: "row",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
