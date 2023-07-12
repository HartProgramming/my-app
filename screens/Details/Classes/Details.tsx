import { StyleProp, ViewStyle } from "react-native";
import { MobileSelectorInterface } from "../../../components/Inputs/MobileSelector";
import { StyleSheet } from "react-native";
import pickerStyles from "../StyleSheets/PickerStyles";
import { MutableRefObject, createRef, useRef, useState } from "react";
import { userAgent } from "next/server";
import React from "react";

class DetailsClass implements MobileSelectorInterface {
  maximumNum: number;
  minimumNum: number;
  contentArrayNum?: number[] | undefined;
  contentArrayStr?: any;
  pickerStyle:
    | StyleProp<ViewStyle>
    | [StyleProp<ViewStyle>, StyleProp<ViewStyle>];
  pickerItemStyle:
    | StyleProp<ViewStyle>
    | [StyleProp<ViewStyle>, StyleProp<ViewStyle>];
  handleChange: any;
  selectedValue: string | number;
  cardContainer:
    | StyleProp<ViewStyle>
    | [StyleProp<ViewStyle>, StyleProp<ViewStyle>];
  key?: string | undefined;
  ref: MutableRefObject<any> | null | undefined;
  handleFocus: any;
  label: string | undefined;
  id: string;
  constructor(
    label: string,
    maximumNum: number,
    minimumNum: number,
    contentArrayNum: number[] | undefined,
    contentArrayStr: any | undefined,
    cardContainer:
      | StyleProp<ViewStyle>
      | [StyleProp<ViewStyle>, StyleProp<ViewStyle>],
    pickerStyle:
      | StyleProp<ViewStyle>
      | [StyleProp<ViewStyle>, StyleProp<ViewStyle>],
    pickerItemStyle:
      | StyleProp<ViewStyle>
      | [StyleProp<ViewStyle>, StyleProp<ViewStyle>],
    id: string,

    selectedValue: string,
    key?: string | undefined,
    ref?: MutableRefObject<any> | null
  ) {
    (this.label = label),
      (this.maximumNum = maximumNum),
      (this.minimumNum = minimumNum),
      (this.cardContainer = cardContainer),
      (this.pickerItemStyle = pickerItemStyle),
      (this.pickerStyle = pickerStyle),
      (this.contentArrayNum = contentArrayNum),
      (this.contentArrayStr = contentArrayStr),
      (this.selectedValue = selectedValue),
      (this.key = key),
      (this.ref = ref || null),
      (this.id = id);
  }

  public changeColor(colors: any) {
    const pickerItemStyle = StyleSheet.compose(this.pickerItemStyle, colors);
    return pickerItemStyle;
  }

  public changeValue(value: string) {
    return (this.selectedValue = value);
  }
}

const age = new DetailsClass(
  "Age",
  80,
  18,
  [],
  [],
  pickerStyles.cardContainer,
  pickerStyles.picker,
  pickerStyles.pickerItem,
  "Age",
  ""
);

const sex = new DetailsClass(
  "Sex",
  0,
  0,
  [],
  [{label: 'Female', value: 'Female'}, {label: 'Male', value: 'Male'}],
  pickerStyles.cardContainer,
  pickerStyles.picker,
  pickerStyles.pickerItem,
  "Sex",
  ""
);
const weight = new DetailsClass(
  "Weight",
  500,
  80,
  [],
  [],
  pickerStyles.cardContainer,
  pickerStyles.picker,
  pickerStyles.pickerItem,
  "Weight",
  ""
);

const weightGoal = new DetailsClass(
  "Weight Goal",
  500,
  80,
  [],
  [],
  pickerStyles.cardContainer,
  pickerStyles.picker,
  pickerStyles.pickerItem,
  "Weight Goal",
  ""
);
const muscleGain = new DetailsClass(
  "Muscle Gain",
  0,
  0,
  [],
  [
    { label: "Maintain: 0.8g Protein/lb", value: "Maintain" },
    { label: "Gain: 1g Protein/lb", value: "Gain" },
    { label: "Extreme 1.2g Protein/lb", value: "Extreme" },
  ],
  pickerStyles.cardContainer,
  pickerStyles.picker,
  pickerStyles.pickerItem,
  "Muscle Goal",
  ""
);

const calorieLoss = new DetailsClass(
    "Calorie Loss",
    0,
    0,
    [],
    [
      {label: 'Maintain', value: 'Maintain'},
      {label: 'Light', value: 'Light'},
      {label: 'Moderate', value: 'Moderate'},
      {label: 'Heavy', value: 'Heavy'},
      {label: 'Extreme', value: 'Extreme'}
    ],
    pickerStyles.cardContainer,
    pickerStyles.picker,
    pickerStyles.pickerItem,
    "Weekly Activity",
    ""
  );

const lifestyle = new DetailsClass(
  "Weekly Activity",
  0,
  0,
  [],
  [
    { value: "Sedentary", label: "Sedentary: No Exercise" },
    { value: "Light", label: "Light: Light Exercise 1-3 days/week" },
    {
      value: "Moderate",
      label: "Moderate: Moderate Exercise 3-5 days/week",
    },
    { value: "Active", label: "Active: Active Exercise 6-7 days/week" },
    {
      value: "Extreme",
      label: "Extreme: Extreme Exercise and Physical Job",
    },
  ],
  pickerStyles.cardContainer,
  pickerStyles.picker,
  pickerStyles.pickerItem,
  "Weekly Activity",
  ""
);

export const physicalDetails = [age, sex, weight];
export const fitnessGoals = [weightGoal, muscleGain, calorieLoss];
export const lifestyleDetails = [lifestyle]