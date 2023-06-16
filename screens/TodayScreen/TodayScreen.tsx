import Card from "../../components/Card/Card";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import Meter from "../../components/Meter/Meter";

export default function TodayScreen() {

    interface MeterDetails {
        width: number;
        height: number;
        percentage: number;
        stroke: string;
        strokeWidth: number;
        strokeLinecap: 'butt' | 'round' | 'square';
    }

  return (
    <Card scrollable={true} containerClass={styles.container}>
      <Card scrollable={false} containerClass={styles.headerContainer}>
        <Text style={styles.header}>Today's Progress</Text>
      </Card>
      <Card scrollable={false} containerClass={styles.indicatorsContainer}>
        <Card scrollable={false} containerClass={styles.indicatorContainer}>
            <Text>Current Calorie Intake</Text>
            <Meter width={100} height={50} percentage={50} strokeProgressColor="blue" strokeStandardColor={'red'} strokeWidth={8} strokeLinecap={'round'}></Meter>
        </Card>
      </Card>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4caf50",
  },
  headerContainer: {
    alignItems: "center",
    marginTop: 15,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 1.2,
  },
  indicatorsContainer: {
  },
  indicatorContainer: {

  }
});
