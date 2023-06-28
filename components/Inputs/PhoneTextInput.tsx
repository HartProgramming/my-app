import { View, TouchableOpacity, TextInput } from "react-native";
import React, { Children } from "react";
import { StyleSheet } from "react-native";
import cn from 'classnames'
import { ViewStyle, TextStyle } from "react-native";
import { StyleProp } from "react-native";

type keyboardType = 'default' | 'numeric' | 'email-address' | 'phone-pad' | 'number-pad'

interface PhoneInputProps {
  inputContainerClass: StyleProp<ViewStyle>;
  inputClass: StyleProp<ViewStyle>;
  textClass: StyleProp<TextStyle>;
  placeholder: string;
  onChange: any;
  secureTextEntry: boolean;
  value: any;
  keyboardType: keyboardType;
  children?: any;
  ref?: any;
  onFocus?: any;
}

const PhoneTextInput : React.FC<PhoneInputProps> = ({onFocus, ref, children, keyboardType, secureTextEntry, onChange, placeholder, inputContainerClass, inputClass, textClass, value}) => {

  return (
    <View style={inputContainerClass}>
      <TouchableOpacity style={inputClass}>
        <TextInput onFocus={onFocus} ref={ref} keyboardType={keyboardType} secureTextEntry={secureTextEntry} onChangeText={onChange} placeholder={placeholder} value={value} style={textClass}></TextInput>
        {children}
      </TouchableOpacity>
    </View>
  );
}

export default PhoneTextInput;
