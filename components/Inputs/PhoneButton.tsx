import { View, TouchableOpacity, Text } from "react-native";
import { StyleProp, ViewStyle, TextStyle } from "react-native";

type ButtonClickHandler = () => void;

interface PhoneButtonProps {
  buttonContainerClass: StyleProp<ViewStyle>;
  buttonClass: StyleProp<ViewStyle>;
  textClass: StyleProp<TextStyle>;
  onPress: ButtonClickHandler;
  text: string
}

const PhoneButton : React.FC<PhoneButtonProps> = ({buttonContainerClass, buttonClass, textClass, onPress, text}) => {
  return (
      <View style={buttonContainerClass}>
        <TouchableOpacity
          onPress={onPress}
          style={buttonClass}
        >
          <Text style={textClass}>{text}</Text>
        </TouchableOpacity>
      </View>
  );
};

export default PhoneButton;
