import { View, StyleSheet } from "react-native";
import { ReactNode, startTransition } from "react";
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
  standardFill
}: MeterProps) {
  const radius = Math.min(width, height) / 2;
  const circumference = 2 * Math.PI * radius;
  const progressPath = width * percentage < width ? width * percentage : width
  const standardPath = width;

  return (
    <Card scrollable={false} containerClass={[styles.container, { width, height }]}>
      <Svg width={width} height={height}>
        <Rect
          fill={standardFill}
          height={rectHeight}
          width={standardPath}
          rx={30}
          ry={30}
          x={0}
          y={0}
          stroke={strokeStandard}
          strokeWidth={strokeWidth}
          strokeLinecap={strokeLinecap}
        />
        <Rect
          rx={30}
          ry={30}
          x={0}
          y={0}
          width={progressPath}
          height={rectHeight}
          strokeWidth={strokeWidth}
          fill={progressPath === standardPath ? '#8c52ff' : progressFill}
          stroke={strokeProgress}
          strokeLinecap={strokeLinecap}
        />
        <G style={styles.groupClass}>
          <Text
            x={width / 2}
            y={rectHeight / 2}
            fill={progressPath === standardPath ? 'white' : '#8c52ff'}
            fontSize={22}
            fontWeight={"bold"}
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
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  groupClass: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -5,
    paddingTop: 20
  },
});
