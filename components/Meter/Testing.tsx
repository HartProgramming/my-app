import { View, StyleSheet } from "react-native";
import { Path, Svg, Text, TSpan } from "react-native-svg";
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
  data: string;
}

export default function Meter({
  height,
  width,
  percentage,
  strokeStandardColor,
  strokeWidth,
  strokeLinecap,
  strokeProgressColor,
  data,
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
    <Card scrollable={false} containerClass={{ width, height }}>
      <Svg width={width} height={height}>
        <Path
          fill="none"
          stroke={strokeStandardColor}
          strokeWidth={strokeWidth}
          strokeLinecap={strokeLinecap}
          d={standardPath}
        />
        <Path
          id="mypath"
          fill="none"
          d={progressPath}
          stroke={strokeProgressColor}
          strokeWidth={strokeWidth}
          strokeLinecap={strokeLinecap}
        />
        <Text
          x="50%"
          y="50%"
          textAnchor="middle"
          fontSize={16}
          fontWeight="bold"
          fill="black"
        >
          <TSpan href="#mypath">{data}</TSpan>
        </Text>
      </Svg>
    </Card>
  );
}
