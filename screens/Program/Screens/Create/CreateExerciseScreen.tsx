import { StyleSheet } from "react-native";
import Card from "../../../../components/Card/Card";
import CardText from "../../../../components/Card/CardText";
import CreateRegimenInput from "../../../../components/Inputs/CreateRegimenInput";
import { useEffect, useState } from "react";
import SetMargin from "../../../../functions/SetMargin";
import SearchCreateButtons from "../../../Journal/Components/Buttons/Main/SearchCreateButtons";
import SearchCreateModal from "../../Components/Modal/SearchCreateModal";
import { FlatList } from "react-native";
import PhoneButton from "../../../../components/Inputs/PhoneButton";
import { AntDesign } from "@expo/vector-icons";
import { displaySearchArr } from "../../../Journal/Screens/SearchExercise";

export default function CreateExerciseScreen() {
  const [data, setData] = useState<any>({});
  const [dataArray, setDataArray] = useState<any>([]);
  const [postData, setPostData] = useState<any>([]);
  const [visible, setVisible] = useState<boolean>(false);
  const [modalType, setModalType] = useState<"search" | "create" | "noShow">(
    "noShow"
  );
  const [programObj, setProgramObj] = useState<any>([]);
  const [dayCounter, setDayCounter] = useState<number>(1);
  const [buttonTransition, setButtonTransition] = useState<
    "prev" | "next" | "none"
  >("none");
  const [instructionsBoolean, setInstructionsBoolean] = useState<boolean>(false)

  const handleEditExercise = (event: string) => {
    console.log(event);
  };

  useEffect(() => {
    console.log(visible);
  }, [data, visible]);

  useEffect(() => {}, [postData, dataArray]);

  const renderList = ({ item }) => (
    <Card scrollable={false} containerClass={styles.listItemsContainer}>
      <Card scrollable={false} containerClass={styles.labelHeaderContainer}>
        <CardText
          semiBold
          text={item.Name}
          container={styles.labelContainer}
          textStyle={styles.label}
        />
        <Card scrollable={false} containerClass={styles.labelButtonsContainer}>
          <PhoneButton
            semiBold
            text="Edit"
            onPress={() => handleEditExercise(item.Name)}
            buttonContainerClass={styles.editButtonContainer}
            buttonClass={styles.editButton}
            textClass={styles.editButtonText}
          />
          <AntDesign name="closecircle" size={30} color={"black"} />
        </Card>
      </Card>
      <Card scrollable={false} containerClass={styles.infoTextDetailsContainer}>
        <CardText
          regular
          text={Object.keys(item).map((value) =>
            parseFloat(item[value]) > 0 ? `${value}: ${item[value]}` : ""
          )}
          container={styles.infoTextContainer}
          textStyle={styles.infoText}
        />
      </Card>
    </Card>
  );

  const handleProcessData = (event: any) => {
    console.log(event);
    setInstructionsBoolean(true);
    if (dataArray.length === 0 && Object.keys(event).length > 0) {
      setDataArray([event]);
    } else if (dataArray.length > 0) {
      setDataArray((prev) => [...prev, event]);
    }
  };

  const handleNext = (event: number) => {
    setDayCounter(event += 1);
    const programData = {
        Day: event += 1,
        ProgramData: dataArray,
      };
      console.log(programData)
      setProgramObj((prev) => [...prev, programData]);
      setDataArray([]);
};

  const handlePrev = (event: number) => {
    setDayCounter(event -= 1);
    console.log(programObj)
    const day = event -= 1;
    setDataArray(
        Object.entries(programObj).filter((value) => value.Day === dayCounter)
      );
  };

  useEffect(() => {
    if (buttonTransition === "next") {
    
    } else if (buttonTransition === "prev") {
   
    }
  }, [dayCounter]);

  useEffect(() => {
    console.log(dataArray)
  }, [programObj, dataArray])

  return (
    <Card scrollable={false} containerClass={styles.container}>
      <Card scrollable={false} containerClass={styles.dayContainer}>
        {instructionsBoolean === true ? (
          <Card scrollable={false} containerClass={styles.daysContainer}>
            <CardText
              bold
              text={`Day: ${dayCounter}`}
              container={styles.dayHeaderContainer}
              textStyle={styles.dayHeader}
            />
            <Card scrollable={false} containerClass={styles.infoContainer}>
              <FlatList data={dataArray} renderItem={renderList} />
            </Card>
            <Card scrollable={false} containerClass={styles.prevNextContainer}>
              <PhoneButton
                text="Prev"
                onPress={() => handlePrev(dayCounter)}
                buttonContainerClass={styles.prevNextButtonContainer}
                buttonClass={styles.prevNextButton}
                textClass={styles.prevNextButtonText}
              />
              <PhoneButton
                text="Next"
                onPress={() => handleNext(dayCounter)}
                buttonContainerClass={styles.prevNextButtonContainer}
                buttonClass={styles.prevNextButton}
                textClass={styles.prevNextButtonText}
              />
            </Card>
          </Card>
        ) : (
          <Card scrollable={false} containerClass={styles.dayContainer}>
            <CardText
              bold
              text="Instructions"
              container={styles.dayHeaderContainer}
              textStyle={styles.dayHeader}
            />
            <CardText
              regular
              text="Below you will be able to search for an exercise in our database or create one"
              container={styles.instructionContainer}
              textStyle={styles.instruction}
            />
          </Card>
        )}
      </Card>

      <Card scrollable={false} containerClass={styles.regimenInputContainer}>
        <SearchCreateButtons visible={setVisible} type={setModalType} />
      </Card>
      <SearchCreateModal
        data={handleProcessData}
        modalType="program"
        textInputType="exercise"
        close={setVisible}
        day="Day"
        type={modalType}
        visible={visible}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  dayContainer: {
    width: "90%",
    borderRadius: 15,
    borderWidth: 3,
    alignSelf: "center",
    marginTop: SetMargin(0.1),
    marginBottom: SetMargin(0.03),
    elevation: 5,
    backgroundColor: "white",
    borderRightWidth: 0,
  },
  dayHeaderContainer: {
    borderBottomWidth: 2,
  },
  dayHeader: {
    fontSize: 26,
    textAlign: "left",
    marginLeft: SetMargin(0.03),
  },
  exerciseContainer: {
    width: "90%",
    alignSelf: "center",
  },
  exerciseHeaderContainer: {},
  exerciseHeader: {
    fontSize: 28,
    letterSpacing: 0.8,
  },
  regimenInputContainer: {
    borderRadius: 10,
    width: "100%",
  },
  instructionContainer: {
    alignItems: "center",
  },
  instruction: {
    fontSize: 20,
  },
  listItemsContainer: {
    flexDirection: "column",
  },
  labelHeaderContainer: {
    flexDirection: "row",
  },
  labelButtonsContainer: {
    flexDirection: "row",
    width: "45%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  editButtonContainer: {
    width: "65%",
  },
  editButton: {
    backgroundColor: "black",
    width: "100%",
    alignItems: "center",
    padding: 5,
    borderRadius: 5,
  },
  editButtonText: {
    color: "white",
    fontSize: 17,
  },
  labelContainer: {
    width: "50%",
    overflow: "hidden",
    justifyContent: "center",
    marginLeft: SetMargin(0.01),
  },
  label: {
    fontSize: 22,
  },
  infoTextDetailsContainer: {},
  infoTextContainer: {
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    marginLeft: SetMargin(0.02),
  },
  infoText: {
    fontSize: 19,
  },
  daysContainer: {
    flexDirection: "column",
  },
  infoContainer: {
    width: "100%",
  },
  prevNextContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly'
  },
  prevNextButtonContainer: {
    backgroundColor: 'black',
    width: '50%'
  },
  prevNextButton: {
    padding: 10,
    alignItems: 'center'
  },
  prevNextButtonText: {
    color: 'white'
  },
});
