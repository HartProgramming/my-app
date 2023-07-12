import Card from "../Card/Card";
import { Picker } from "@react-native-picker/picker";
import { MutableRefObject, RefObject, useEffect, useState } from "react";
import { StyleProp, View, ViewStyle } from "react-native";

export interface MobileSelectorInterface {
  minimumNum: number;
  maximumNum: number;
  contentArrayStr?: any;
  contentArrayNum?: number[];
  pickerStyle:
    | StyleProp<ViewStyle>
    | [StyleProp<ViewStyle>, StyleProp<ViewStyle>];
  pickerItemStyle:
    | StyleProp<ViewStyle>
    | [StyleProp<ViewStyle>, StyleProp<ViewStyle>];
  handleChange: any;
  selectedValue: number | string;
  cardContainer:
    | StyleProp<ViewStyle>
    | [StyleProp<ViewStyle>, StyleProp<ViewStyle>];
  key?: string;
  ref: any;
  handleFocus: any;
  id: string;
}

export default function MobileSelector({
  minimumNum,
  maximumNum,
  contentArrayStr,
  contentArrayNum,
  pickerItemStyle,
  pickerStyle,
  handleChange,
  selectedValue,
  cardContainer,
  key,
  ref,
  handleFocus,
  id,
}: MobileSelectorInterface) {
  const [focusId, setFocusId] = useState<string>("");
  const [value, setValue] = useState<any>("");

  function generateSelectorContent(
    minimumNum: number,
    maximumNum: number,
    array?: any
  ) {
    let arr: { label: string; value: string }[] = [];
    if (maximumNum > 0) {
      for (let item = minimumNum; item <= maximumNum; item++) {
        arr.push({ label: `${item}`, value: `${item}` });
      }
    } else if (array && array.length > 0) {
      for (let item of array) {
        arr.push({ label: `${item.label}`, value: `${item.value}` });
      }
    } else if (array === undefined) {
      arr.push({ label: "1", value: "2" });
    }
    return arr;
  }

  const setChange = (event: string) => {
    setValue(event);
    handleChange(event);
  };

  const setFocus = (event: string) => {
    console.log(event);
    handleFocus(event);
  }

  useEffect(() => {
    selectedValue = value;
  }, [value]);

  return (
    <Card scrollable={false} containerClass={cardContainer}>
      <Picker
        onValueChange={setChange}
        selectedValue={value}
        style={pickerStyle}
        ref={ref}
        id={id}
        onFocus={() => setFocus(id)}
      >
        {generateSelectorContent(minimumNum, maximumNum, contentArrayStr).map(
          (value: any) => {
            return (
              <Picker.Item
                style={pickerItemStyle}
                label={value.label}
                value={value.value}
                key={value.value}
              ></Picker.Item>
            );
          }
        )}
      </Picker>
    </Card>
  );
}
