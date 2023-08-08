import Card from "./Card";
import { Text, StyleProp, ViewStyle, TextStyle } from "react-native";
import { StyleSheet } from "react-native";
import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, useFonts } from "@expo-google-fonts/poppins";

interface CardText {
  text: string | number;
  container: StyleProp<ViewStyle>;
  textStyle: StyleProp<TextStyle>;
  bold?: boolean;
  regular?: boolean;
  semiBold?: boolean;
  medium?: boolean;
} 

export default function CardText({medium, bold, regular, semiBold, text, container, textStyle }: CardText) {

  const [fontLoaded] = useFonts({
    Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold
  })

  return (
    <Card scrollable={false} containerClass={container}>
      <Text style={[textStyle, bold ? styles.poppinsBold : regular ? styles.poppinsRegular : semiBold ? styles.poppinsSemiBold : medium ? styles.poppinsMedium : undefined]}>{text}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  poppinsBold: {
    fontFamily: 'Poppins_700Bold'
  },
  poppinsRegular: {
    fontFamily: 'Poppins_400Regular'
  },
  poppinsSemiBold: {
    fontFamily: 'Poppins_600SemiBold'
  },
  poppinsMedium: {
    fontFamily: 'Poppins_500Medium'
  }
})
