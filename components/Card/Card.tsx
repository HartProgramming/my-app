import { View, ScrollView } from "react-native";
import { StyleProp, ViewStyle } from "react-native";
import React, { ReactNode } from "react";
import { TouchableOpacity } from "react-native";

interface CardProps {
  containerClass: any;
  scrollable?: boolean;
  children: ReactNode;
  onPress?: any;
  onPressBoo?: boolean;
}

export default function Card({
  containerClass,
  scrollable,
  children,
  onPress,
  onPressBoo,
}: CardProps) {
  return (
    <>
      {scrollable && <ScrollView style={containerClass}>{children}</ScrollView>}
      {!scrollable && <View style={containerClass}>{children}</View>}
    </>
  );
}
