import { View, TouchableOpacity, Text } from "react-native";
import { StyleProp, ViewStyle, TextStyle } from "react-native";

type ButtonClickHandler = () => void;

interface PhoneButtonProps {
  buttonContainerClass: StyleProp<ViewStyle>;
  buttonClass: StyleProp<ViewStyle>;
  textClass: StyleProp<TextStyle>;
  onPress: ButtonClickHandler;
  text: string;
  image?: any;
}

const PhoneButton: React.FC<PhoneButtonProps> = ({
  buttonContainerClass,
  buttonClass,
  textClass,
  onPress,
  text,
  image
}) => {
  return (
    <View style={buttonContainerClass}>
      <TouchableOpacity onPress={onPress} style={buttonClass}>
        {image}
        <Text style={textClass}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PhoneButton;
