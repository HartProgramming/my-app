import { View, TouchableOpacity, TextInput } from "react-native";
import React, { Children } from "react";
import { StyleSheet } from "react-native";
import cn from 'classnames'
import { ViewStyle, TextStyle } from "react-native";
import { StyleProp } from "react-native";
import { Poppins_400Regular, Poppins_500Medium, useFonts } from "@expo-google-fonts/poppins";

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
  icon?: any;
  regular?: boolean;
  medium?: boolean;
  placeholderContainer?: StyleProp<ViewStyle>;
}

const PhoneTextInput : React.FC<PhoneInputProps> = ({placeholderContainer, medium, regular, icon, onFocus, ref, children, keyboardType, secureTextEntry, onChange, placeholder, inputContainerClass, inputClass, textClass, value}) => {

  const [fontLoaded] = useFonts({
    Poppins_400Regular, Poppins_500Medium
  })

  return (
    <View style={inputContainerClass}>
      <TouchableOpacity style={inputClass}>
        <TextInput textAlignVertical="center" onFocus={onFocus} ref={ref} keyboardType={keyboardType} secureTextEntry={secureTextEntry} onChangeText={onChange} placeholder={placeholder} value={value} style={[textClass, medium ? styles.medium : regular ? styles.regular : undefined]}></TextInput>
        {children}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  regular: {
    fontFamily: 'Poppins_400Regular'
  },
  medium: {
    fontFamily: 'Poppins_500Medium'
  }
})

export default PhoneTextInput;
