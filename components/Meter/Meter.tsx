import { View, StyleSheet } from "react-native";
import { ReactNode, startTransition } from "react";
import Svg, { Path, Text, G, TextPath, TSpan, Rect } from "react-native-svg";
import React from "react";
import Card from "../Card/Card";
import { Poppins_600SemiBold, Poppins_700Bold, useFonts } from "@expo-google-fonts/poppins";

interface MeterProps {
  width: number;
  height: number;
  percentage: number;
  strokeWidth: number;
  strokeLinecap: "butt" | "round" | "square";
  data: string;
  strokeStandard: string;
  strokeProgress: string;
  rectHeight: number;
  standardFill: string;
  progressFill: string;
}

export default function Meter({
  height,
  width,
  percentage,
  strokeWidth,
  strokeLinecap, 
  data,
  strokeProgress,
  strokeStandard,
  rectHeight,
  progressFill,
  standardFill,
}: MeterProps) {
  const radius = Math.min(width, height) / 2;
  const circumference = 2 * Math.PI * radius;
  const progressPath = width * percentage < width ? width * percentage : width;
  const standardPath = width;

  const [fontLoaded] = useFonts({
    Poppins_600SemiBold, Poppins_700Bold
  });

  return (
    <Card
      scrollable={false}
      containerClass={[styles.container, { width, height }]}
    >
      <Svg width={width} height={height}>
        <Rect
          fill={standardFill}
          height={rectHeight}
          width={standardPath}
          rx={15}
          ry={15}
          x={0}
          y={0}
          stroke={strokeStandard}
          strokeWidth={strokeWidth}
          strokeLinecap={strokeLinecap}
        />
        <Rect
          rx={15}
          ry={15}
          x={0}
          y={0}
          width={progressPath}
          height={rectHeight}
          strokeWidth={strokeWidth}
          fill={progressPath === standardPath ? "#8c52ff" : progressFill}
          stroke={strokeProgress}
          strokeLinecap={strokeLinecap}
        />
        <G style={styles.groupClass}>
          <Text
            x={width / 2}
            y={rectHeight / 2}
            fill={progressPath === standardPath ? "white" : "white"}
            fontSize={18}
            fontWeight={'bold'}
            textAnchor="middle"
            alignmentBaseline="central"
          >
            <TSpan>{data}</TSpan>
          </Text>
        </G>
      </Svg>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  groupClass: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,

  },
});
