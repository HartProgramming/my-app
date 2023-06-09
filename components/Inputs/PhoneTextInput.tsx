import { View, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import cn from 'classnames'
import { ViewStyle, TextStyle } from "react-native";
import { StyleProp } from "react-native";

type handleChange = () => void;

interface PhoneInputProps {
  inputContainerClass: StyleProp<ViewStyle>;
  inputClass: StyleProp<ViewStyle>;
  textClass: StyleProp<TextStyle>;
  placeholder: string;
  onChange: handleChange;
  secureTextEntry: boolean;
}

const PhoneTextInput : React.FC<PhoneInputProps> = ({secureTextEntry, onChange, placeholder, inputContainerClass, inputClass, textClass}) => {

  return (
    <View style={inputContainerClass}>
      <TouchableOpacity style={inputClass}>
        <TextInput keyboardType='default' secureTextEntry={secureTextEntry} onChange={onChange} placeholder={placeholder} style={textClass}></TextInput>
      </TouchableOpacity>
    </View>
  );
}

export default PhoneTextInput;
