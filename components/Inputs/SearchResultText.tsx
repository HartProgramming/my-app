import { TouchableOpacity, View } from "react-native";

interface SearchResultTextProps {
  onPress: any;
  container: any;
  children: any;
}

export default function SearchResultText({
  onPress,
  container,
  children,
}: SearchResultTextProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={container}>{children}</View>
    </TouchableOpacity>
  );
}
