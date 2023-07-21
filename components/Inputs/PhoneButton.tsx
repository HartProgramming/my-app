import { View, TouchableOpacity, Text } from "react-native";
import { StyleProp, ViewStyle, TextStyle } from "react-native";
import { StyleSheet } from "react-native";
import { Poppins_600SemiBold, Poppins_400Regular, Poppins_700Bold, Poppins_500Medium, useFonts } from "@expo-google-fonts/poppins";


type ButtonClickHandler = () => void;

interface PhoneButtonProps {
  buttonContainerClass: StyleProp<ViewStyle>;
  buttonClass: any;
  textClass: StyleProp<TextStyle>;
  onPress: any;
  text: string | undefined;
  image?: any;
  bold?: boolean;
  semiBold?: boolean;
  regular?: boolean;
  medium?: boolean;
}

const PhoneButton: React.FC<PhoneButtonProps> = ({
  buttonContainerClass,
  buttonClass,
  textClass,
  onPress,
  text,
  image,
  bold,
  semiBold,
  regular,
  medium
}) => {

  const [fontLoaded] = useFonts({
    Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold
  })

  return (
    <View style={buttonContainerClass}>
      <TouchableOpacity onPress={onPress} style={buttonClass}>
        {image}
        <Text style={[textClass, bold ? styles.bold : semiBold ? styles.semiBold : regular ? styles.regular : medium ? styles.medium : undefined]}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bold: {
    fontFamily: 'Poppins_700Bold'
  },
  semiBold: {
    fontFamily: 'Poppins_600SemiBold'
  },
  regular: {
    fontFamily: 'Poppins_400Regular'
  },
  medium: {
    fontFamily: 'Poppins_500Medium'
  }
})

export default PhoneButton;
