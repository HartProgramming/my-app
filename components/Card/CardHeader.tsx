import Card from "./Card";
import { Text, StyleProp, ViewStyle, TextStyle } from "react-native";

interface CardText {
  text: string;
  container: StyleProp<ViewStyle>;
  textStyle: StyleProp<TextStyle>;
}

export default function CardText({ text, container, textStyle }: CardText) {
  return (
    <Card containerClass={container} scrollable={false}>
      <Text style={textStyle}>{text}</Text>
    </Card>
  );
}
