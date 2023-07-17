import Card from "./Card";
import { Text, StyleProp, ViewStyle, TextStyle } from "react-native";

interface CardText {
  text: string;
  container: StyleProp<ViewStyle>;
  textStyle: StyleProp<TextStyle>;
}

export default function CardText({ text, container, textStyle }: CardText) {
  return (
    <Card scrollable={false} containerClass={container}>
      <Text style={textStyle}>{text}</Text>
    </Card>
  );
}
