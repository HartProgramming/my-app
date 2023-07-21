import Card from "./Card";
import { Text, StyleProp, ViewStyle, TextStyle } from "react-native";
import { StyleSheet } from "react-native";

interface CardText {
  text: string;
  container: StyleProp<ViewStyle>;
  textStyle: StyleProp<TextStyle>;
  bold?: boolean;
  regular?: boolean;
  semiBold?: boolean;
}

export default function CardText({bold, regular, semiBold, text, container, textStyle }: CardText) {
  return (
    <Card scrollable={false} containerClass={container}>
      <Text style={[textStyle, bold ? styles.poppinsBold : regular ? styles.poppinsRegular : semiBold ? styles.poppinsSemiBold : undefined]}>{text}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  poppinsBold: {
    fontFamily: 'poppins-bold'
  },
  poppinsRegular: {
    fontFamily: 'poppins-regular'
  },
  poppinsSemiBold: {
    fontFamily: 'poppins-semi-bold'
  }
})
