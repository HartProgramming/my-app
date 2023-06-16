import { View, StyleSheet } from "react-native";
import { Svg, Path } from "react-native-svg";
import React from "react";
import Card from "../Card/Card";

interface MeterProps {
  width: number;
  height: number;
  percentage: number;
  strokeStandardColor: string;
  strokeWidth: number;
  strokeLinecap: "butt" | "round" | "square";
  strokeProgressColor: string;
}

export default function Meter({
  height,
  width,
  percentage,
  strokeStandardColor,
  strokeWidth,
  strokeLinecap,
  strokeProgressColor
}: MeterProps) {
  const radius = Math.min(width, height) / 2;
  const circumference = 2 * Math.PI * radius;
  const progressPath = `M${strokeWidth / 2} ${height / 2} L${(width * percentage) / 100} ${height / 2}`;
  const standardPath = `M${(width * percentage) / 100} ${height / 2} L${width - strokeWidth / 2} ${height / 2}`;

  return (
    <Card scrollable={false} containerClass={{ width, height }}>
      <Svg width={width} height={height}>
        <Path
          fill={"none"}
          stroke={strokeStandardColor}
          strokeWidth={strokeWidth}
          strokeLinecap={strokeLinecap}
          d={standardPath}
        ></Path>
        <Path
        fill={'none'}
          d={progressPath}
          stroke={strokeProgressColor}
          strokeWidth={8}
          strokeLinecap={strokeLinecap}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={progressPath}
        />
      </Svg>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {},
});
