import { View, StyleSheet } from "react-native";
import { ReactNode } from "react";
import Svg, { Path, Text, G, TextPath, TSpan, Rect } from "react-native-svg";

import React from "react";
import Card from "../Card/Card";

interface MeterProps {
  width: number;
  height: number;
  percentage: number;
  strokeWidth: number;
  strokeLinecap: "butt" | "round" | "square";
  data: string;
  strokeStandard: string;
  strokeProgress: string;
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
}: MeterProps) {
  const radius = Math.min(width, height) / 2;
  const circumference = 2 * Math.PI * radius;
  const progressPath = `M${strokeWidth / 2} ${height / 2} L${
    (width * percentage) / 100
  } ${height / 2}`;
  const standardPath = `M${(width * percentage) / 100} ${height / 2} L${
    width - strokeWidth / 2
  } ${height / 2}`;

  return (
    <Card scrollable={false} containerClass={[styles.container, { width, height }]}>
      <Svg width={width} height={height}>
        <Rect
          fill="black"
          height={80}
          width={standardPath}
          rx={20}
          ry={20}
          x={5}
          y={5}
          stroke={strokeStandard}
          strokeWidth={strokeWidth}
          strokeLinecap={strokeLinecap}
        />
        <Rect
          rx={15}
          ry={15}
          x={5}
          y={5}
          width={progressPath}
          height={80}
          fill="blue"
          stroke={strokeProgress}
          strokeWidth={strokeWidth}
          strokeLinecap={strokeLinecap}
        />
        <G>
          <Text
            x={width / 2}
            y={height / 2}
            fill={"white"}
            fontSize={22}
            fontWeight={"bold"}
            textAnchor="middle"
            alignmentBaseline="middle"
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  groupClass: {
    paddingTop: 10,
  },
});
