import { View, ScrollView } from "react-native";
import { StyleProp, ViewStyle } from "react-native";
import React, { ReactNode } from "react";

interface CardProps {
    containerClass: any;
    scrollable: boolean;
    children: ReactNode;
  }

export default function Card(
  {containerClass, scrollable, children}: CardProps
) {
  return (
    <>
      {scrollable && <ScrollView style={containerClass}>{children}</ScrollView>}
      {!scrollable && <View style={containerClass}>{children}</View>}
    </>
  );
}
