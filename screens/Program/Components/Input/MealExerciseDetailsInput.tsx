import { StyleSheet } from "react-native";
import Card from "../../../../components/Card/Card";
import CardText from "../../../../components/Card/CardText";
import NumberInput from "../../../../components/Inputs/NumberInput";
import { useEffect, useState } from "react";
import SetMargin from "../../../../functions/SetMargin";

export interface MealExerciseDetailsInputProps {
  array: any;
  name: string;
  mealObject: any;
  onChange: any;
  type: 'exercise' | 'meal'
}

export interface MealObjectProps {
  Calories: string;
  Protein: string;
  Sodium: string;
  Fat: string;
  Sugar: string;
  Cholesterol: string;
}

export default function MealExerciseDetailsInput({
  mealObject,
  array,
  name,
  onChange,
  type
}: MealExerciseDetailsInputProps) {
  const [numericInputValue, setNumericInputValue] = useState<string>("");
  const [focus, setFocus] = useState<any>("");
  const [dataObject, setDataObject] = useState<any>(mealObject);
  const [object, setObject] = useState<any>(mealObject)
  const [data, setData] = useState<any>({});

  const handleNumberChange = (event: any) => {
    setData((mealObject[focus] = event));
    setDataObject({
        ...object,
        [focus]: event, // The `event` parameter directly contains the changed text value
      });
  };

  useEffect(() => {
    if(type === 'meal'){
        setObject(mealObject)
    }else if(type === 'exercise'){
        setObject(mealObject)
    }
    console.log(type)
  }, [type])

  useEffect(() => {
    setObject(dataObject)
  }, [data, dataObject]);

  useEffect(() => {
    console.log(dataObject);
    onChange(dataObject)
  }, [dataObject]);

  const handleNumericFocus = (event: string) => {
    setFocus(event);
    console.log(event);
    setNumericInputValue("");
  };

  return (
    <Card scrollable={false} containerClass={styles.detailContainer}>
      <Card scrollable={false} containerClass={styles.detailsContainer}>
        <CardText
          medium
          container={styles.detailLabelContainer}
          textStyle={styles.detailLabel}
          text="Name"
        />
        <CardText
          container={styles.detailTextContainer}
          textStyle={styles.detailText}
          text={name}
        />
      </Card>
      {array.map((value) => (
        <Card scrollable={false} containerClass={styles.detailsContainer}>
          <CardText
            medium
            container={styles.detailLabelContainer}
            textStyle={styles.detailLabel}
            text={value.label}
          />
          <NumberInput
            value={data[value.label]}
            onChange={handleNumberChange}
            placeholder={"0"}
            secureTextEntry={false}
            inputContainerClass={styles.numberInputContainer}
            inputClass={styles.numberInput}
            textClass={styles.numberInputText}
            key={value.label}
            onFocus={() => handleNumericFocus(value.label)}
          />
        </Card>
      ))}
    </Card>
  );
}

const styles = StyleSheet.create({
  detailContainer: {
    borderWidth: 2,
    width: "90%",
    alignSelf: "center",
    marginTop: SetMargin(0.02),
    flexDirection: "column",
    justifyContent: "center",
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  detailLabelContainer: {
    width: "40%",
    borderBottomWidth: 2,
    borderRightWidth: 2,
  },
  detailLabel: {
    fontSize: 20,
  },
  detailTextContainer: {
    width: "60%",
  },
  detailText: {
    fontSize: 22,
  },
  numberInputContainer: {
    backgroundColor: 'rgba(0,0,0,.3)',
    width: '60%',
    borderBottomWidth: 2
},
  numberInput: {
    padding: 2,
    marginLeft: SetMargin(.04),
    borderRadius: 15,
  },
  numberInputText: {
    fontSize: 22,
  },
});
