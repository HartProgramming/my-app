import ReusableDetails from "./ReusableDetails";
import Card from "../../components/Card/Card";
import { StyleSheet } from "react-native";
import { SelectorArray } from "./ReusableDetails";
import { useEffect, useRef, useState } from "react";
import PhoneButton from "../../components/Inputs/PhoneButton";
import { useNavigation } from "@react-navigation/native";
import { lifestyleDetails } from "./Classes/Details";
import CardText from "../../components/Card/CardText";
import SetMargin from "../../functions/SetMargin";
import Navigation from "../../objects/NavigationType";
import { CheckBox } from "react-native-elements";
import { Poppins_500Medium, useFonts } from "@expo-google-fonts/poppins";

export default function ActivityDetails({ route }: any) {

  const [fontLoaded] = useFonts({
     Poppins_500Medium
  })



  const checkboxDaysArr: DropdownInfo[] = [
    { id: 1, label: "Monday", ref: useRef<string>("Monday"), checked: false },
    { id: 2, label: "Tuesday", ref: useRef<string>("Tuesday"), checked: false },
    {
      id: 3,
      label: "Wednesday",
      ref: useRef<string>("Wednesday"),
      checked: false,
    },
    {
      id: 4,
      label: "Thursday",
      ref: useRef<string>("Thursday"),
      checked: false,
    },
    { id: 5, label: "Friday", ref: useRef<string>("Friday"), checked: false },
    {
      id: 6,
      label: "Saturday",
      ref: useRef<string>("Saturday"),
      checked: false,
    },
    { id: 7, label: "Sunday", ref: useRef<string>("Sunday"), checked: false },
  ];

  const [itemsArray, setItemsArray] = useState<SelectorArray[]>([]);
  const [weightGoal, setWeightGoal] = useState<number>(0);
  const [muscleGoal, setMuscleGoal] = useState<string>("");
  const [data, setData] = useState<any>([{ weightGoal: "", muscleGoal: "" }]);
  const [checkboxArr, setCheckBoxArr] = useState<DropdownInfo[]>(checkboxDaysArr);
  const [dataObj, setDataObj] = useState<any>();

  const component = route.params;

  const navigation = useNavigation();

  interface DropdownInfo {
    label: string;
    value?: string;
    ref?: MutableRefObject<string> | undefined;
    checked?: boolean;
    id?: number;
  }

  const handleCheck = (checkboxId: any) => {
    setCheckBoxArr((prevCheckboxes) =>
    prevCheckboxes.map((checkbox) => {
      if (checkbox.id === checkboxId) {
        return { ...checkbox, checked: !checkbox.checked };
      }
      return checkbox;
    })
  );
  }


  useEffect(() => {
    console.log(checkboxArr)
  }, [checkboxArr])

  const handleTrans = (event: string) => {
    Navigation({ navigation }, "");
    console.log(dataObj);
  };

  useEffect(() => {
    console.log(data);
    setDataObj(data);
  }, [data]);

  return (
    <Card scrollable={false} containerClass={styles.container}>
      {component === "Sign Up" && (
        <CardText
          semiBold
          text="Step 3 of 5"
          textStyle={styles.header}
          container={styles.headerContainer}
        />
      )}
      <ReusableDetails
        data={setData}
        header="Lifestyle Details"
        selectorArray={lifestyleDetails}
      />
      <Card scrollable={false} containerClass={styles.checkContainer}>
          <CardText container={styles.checkBoxLabelContainer} textStyle={styles.checkBoxLabel} text="Days"/>
          <Card scrollable={false} containerClass={styles.checkBoxesContainer}>
            {checkboxArr.map((value) => {
              return (
                <CheckBox
                textStyle={styles.check}
                  title={value.label}
                  checked={value.checked}
                  key={value.id}
                  onPress={() => handleCheck(value.id)}
                  checkedColor="black"
                  containerStyle={styles.checkedContainer}
                />
              );
            })}
          </Card>
        </Card>
      <PhoneButton
        semiBold
        text={component === 'Sign Up' ? 'Next' : 'Save'}
        buttonClass={[styles.button, { backgroundColor: "black" }]}
        buttonContainerClass={styles.buttonContainer}
        onPress={handleTrans}
        textClass={styles.text}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: SetMargin(-0.1),
    marginTop: SetMargin(0.15),
  },
  header: {
    fontSize: 28,
  },
  buttonContainer: {
    width: "60%",
    alignSelf: "center",
    marginTop: SetMargin(0.03),
  },
  button: {
    alignItems: "center",
    padding: 15,
    borderRadius: 15,
    borderStyle: "solid",
    borderWidth: 2,
  },
  text: {
    fontSize: 28,
    letterSpacing: 1,
    color: "white",
  },
  checkContainer: {

  },
  checkBoxLabelContainer: {

  },
  checkBoxLabel: {

  },
  checkBoxesContainer: {
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center'
  },
  checkedContainer: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    width: '75%'
  },
  check: {
    letterSpacing: 1
  }
});
