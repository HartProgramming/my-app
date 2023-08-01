import Card from "../../../../components/Card/Card";
import CardText from "../../../../components/Card/CardText";
import { StyleSheet } from "react-native";



export default function TodayLogHeader() {
  return (
    <Card scrollable={false} containerClass={styles.container}>
      <CardText bold text="Today's Log" container={styles.headerContainer} textStyle={styles.header} />
    </Card>
  );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1
    },
    headerContainer: {
        alignSelf: 'center',
        width: '85%',
    },
    header: {
        fontSize: 28,
        letterSpacing: .8
    }
})