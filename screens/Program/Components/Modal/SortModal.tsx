import { StyleSheet } from "react-native";
import FilterSortBaseModal from "./FilterSortBaseModal";
import { useEffect, useState } from "react";
import SetMargin from "../../../../functions/SetMargin";
import { FilterArrayProps, ProgramModalProps } from "./FilterModal";
import { CheckBox } from "react-native-elements";


export default function SortModal({visible, cards, showHide}: ProgramModalProps){


  const sortCheckboxArray: FilterArrayProps[] = [
    {label: 'Low-High', value: 'ascending', checked: false, title: 'Price'},
    {label: 'High-Low', value: 'descending', checked: false, title: 'Price'},
    {label: 'Title A-Z', value: 'ascending', checked: false, title: 'Title'},
    {label: 'Title Z-A', value: 'descending', checked: false, title: 'Title'},
    {label: 'Cycle: Low-High', value: 'ascending', checked: false, title: 'Cycle'},
    {label: 'Cycle: High-Low', value: 'descending', checked: false, title: 'Cycle'},
  ]

  const [elements, setElements] = useState<any>();
  const [checkValue, setCheckValue] = useState<string>('');
  const [checkBoxArray, setCheckBoxArray] = useState<any>(sortCheckboxArray);
  const [selected, setSelected] = useState<any>(sortCheckboxArray[0].label);
  const [selectedCheck, setSelectedCheck] = useState<any>(sortCheckboxArray);

  
  const handleCheck = (checkboxId: any) => {
    setSelected(checkboxId)
    setCheckBoxArray((prevCheckboxes: any) =>
      prevCheckboxes.map((checkbox: any) => {
        if (checkbox.label === checkboxId) {
          return { ...checkbox, checked: !checkbox.checked };
        }
        return checkbox;
      })
    );
    setSelectedCheck(sortCheckboxArray.filter((value: any) => value.label === checkboxId))
  };

  useEffect(() => {
    console.log(selectedCheck)
    cards(selectedCheck)
  }, [checkBoxArray, selectedCheck])

 
    useEffect(() => {
      setElements(checkBoxArray.map((value: any) => {
        return (
          <CheckBox
            title={value.label}
            checked={selected === value.label}
            key={value.label}
            onPress={() => handleCheck(value.label)}
            containerStyle={styles.checkbox}
            textStyle={styles.checkboxText}
            checkedColor="blue"
          />
        );
      }))
    }, [checkBoxArray])

    return(
        <FilterSortBaseModal sort={elements} title="Sort" visible={visible} showHide={showHide}/>
    )
}

const styles = StyleSheet.create({
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
})