import Card from "../../../../components/Card/Card";
import { StyleSheet } from "react-native";
import PhoneButton from "../../../../components/Inputs/PhoneButton";
import { SetStateAction, useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { View, Image } from "react-native";
import { CheckBox } from "react-native-elements";
import SetMargin from "../../../../functions/SetMargin";

interface DropdownProps {
  label: string;
  filterArray: any;
  checkedArray: any;
}

export default function FilterDropdown({ label, filterArray, checkedArray }: DropdownProps) {
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [checkBox, setCheckBox] = useState<boolean>(false);
  const [checkBoxArray, setCheckBoxArray] = useState<any>(filterArray);
  const [checkedValue, setCheckedValue] = useState<any>([]);

  const handleCheck = (checkboxId: any) => {
    setCheckBoxArray((prevCheckboxes: any) =>
      prevCheckboxes.map((checkbox: any) => {
        if (checkbox.label === checkboxId) {
          return { ...checkbox, checked: !checkbox.checked };
        }
        return checkbox;
      })
    );
  }; 

  const handleShow = () => {
    console.log(showFilter);
    if (showFilter === false) {
      setShowFilter(true);
    } else {
      setShowFilter(false);
    }
  };

  useEffect(() => {

    setCheckedValue(checkBoxArray.filter((value: any) => value.checked === true))
    checkedArray(checkBoxArray.filter((value: any) => value.checked === true))
  }, [checkBoxArray])


  return (
    <Card scrollable={false} containerClass={styles.container}>
      <Card scrollable={false} containerClass={styles.buttonContainer}>
        <PhoneButton
          semiBold
          onPress={handleShow}
          buttonClass={styles.labelButton}
          buttonContainerClass={styles.labelContainer}
          textClass={styles.label}
          text={label}
        />
        {showFilter ? (
          <AntDesign onPress={handleShow} name="arrowup" size={28} color="black" />
        ) : (
          <AntDesign onPress={handleShow} name="arrowdown" size={28} color="black" />
        )}
      </Card>

      {showFilter && (
        <>
          {checkBoxArray.map((value: any) => {
            return (
              <CheckBox
                title={value.label}
                checked={value.checked}
                key={value.label}
                onPress={() => handleCheck(value.label)}
                containerStyle={styles.checkbox}
                textStyle={styles.checkboxText}
              />
            );
          })}
        </>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
    padding: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '65%',
    alignItems: 'center',
    alignSelf: 'center',

  },
  labelContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  labelButton: {
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "90%",
  },
  label: {
    fontSize: 28,
  },
  checkbox: {
    backgroundColor: "transparent",
    borderWidth: 0,
    alignItems: "flex-start",
    width: "100%",
    justifyContent: "center",
    marginLeft: SetMargin(.10)
  },
  checkboxText: {
    fontSize: 20,
  },
});
