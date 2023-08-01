import { View, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import cn from 'classnames'
import { ViewStyle, TextStyle } from "react-native";
import { StyleProp } from "react-native";


interface PhoneInputProps {
  inputContainerClass: StyleProp<ViewStyle>;
  inputClass: StyleProp<ViewStyle>;
  textClass: StyleProp<TextStyle>;
  placeholder: string;
  onChange: any;
  secureTextEntry: boolean;
  value: string;
  key: string;
  onFocus: any;
} 

const NumberInput : React.FC<PhoneInputProps> = ({key,onFocus, value, secureTextEntry, onChange, placeholder, inputContainerClass, inputClass, textClass}) => {

  return (
    <View style={inputContainerClass}>
      <TouchableOpacity style={inputClass}>
        <TextInput onFocus={onFocus} key={key} value={value} keyboardType='numeric' secureTextEntry={secureTextEntry} onChange={onChange} placeholder={placeholder} style={textClass}></TextInput>
      </TouchableOpacity>
    </View>
  );
}

export default NumberInput;