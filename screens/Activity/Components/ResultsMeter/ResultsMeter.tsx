import { StyleSheet } from "react-native";
import Card from "../../../../components/Card/Card";
import CardText from "../../../../components/Card/CardHeader";
import Meter from "../../../../components/Meter/Meter";

interface ResultsMeterProps {
  label: string;
  data: string;
  width: number;
  percentage: number;
}

export default function ResultsMeter({
  label,
  data,
  width,
  percentage,
}: ResultsMeterProps) {
  return (
    <Card
      key={label}
      scrollable={false}
      containerClass={styles.indicatorContainer}
    >
      <CardText
        container={styles.performanceLabelContainer}
        textStyle={styles.performanceLabel}
        text={label}
      />
      <Meter
        data={data}
        strokeWidth={0}
        width={width}
        height={20}
        rectHeight={20}
        percentage={percentage}
        strokeLinecap={"round"}
        strokeProgress="gray"
        progressFill="gray"
        standardFill="black"
        strokeStandard="black"
      ></Meter>
    </Card>
  );
}

const styles = StyleSheet.create({
  indicatorContainer: {
    flexDirection: "row",
    width: "85%",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "black",
    borderBottomWidth: 2,
    borderStyle: "solid",
    padding: 17,
  },
  performanceLabelContainer: {
    width: "20%",
  },
  performanceLabel: {
    fontSize: 18,
    color: "black",
    fontFamily: "poppins-medium",
  },
});
