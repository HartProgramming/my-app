import { StyleSheet } from "react-native";
import Card from "../../../../components/Card/Card";
import CardText from "../../../../components/Card/CardText";
import { AntDesign } from "@expo/vector-icons";
import SetMargin from "../../../../functions/SetMargin";

export interface InfoDeleteOptionsProps {
    text: string;
}

export default function InfoDeleteOptionalCard({text}: InfoDeleteOptionsProps) {
  return (
    <Card scrollable={false} containerClass={styles.surroundingDataContainer}>
      <Card scrollable={false} containerClass={styles.dataContainer}>
        <CardText
          medium
          container={styles.dataInfoContainer}
          textStyle={styles.dataInfo}
          text={text}
        />
        <Card scrollable={false} containerClass={styles.dataButtonsContainer}>
          <AntDesign name="closecircle" size={30} color={"black"} />
        </Card>
      </Card>
    </Card>
  );
}

const styles = StyleSheet.create({
    surroundingDataContainer: {
        width: "100%",
        padding: 4,
      },
      dataContainer: {
        flexDirection: "row",
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: 2,
        width: "100%",
        alignItems: "center",
        padding: 2,
        backgroundColor: "#fafafa",
        borderRadius: 10,
        elevation: 3,
      },
      dataInfoContainer: {
        width: "90%",
      },
      dataInfo: {
        fontSize: 20,
        marginLeft: SetMargin(0.01),
      },
      dataButtonsContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    
        width: "30%",
      },
})