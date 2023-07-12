import Card from "../../../components/Card/Card";
import { StyleSheet } from "react-native";
import CardText from "../../../components/Card/CardHeader";
import RegimenButton from "../Components/Buttons/RegimenButton";
import Navigation from "../../../objects/NavigationType";
import { useNavigation } from "@react-navigation/native";
import SetMargin from "../../../functions/SetMargin";

export default function MainRegimen() {
  const navigation = useNavigation();

  return (
    <Card scrollable={false} containerClass={styles.container}>
      <Card scrollable={false} containerClass={styles.buttonsContainer}>
        <RegimenButton
          label="Search"
          onPress={Navigation({ navigation }, "search")}
        />
        <RegimenButton
          label="Create"
          onPress={Navigation({ navigation }, "create")}
        />
      </Card>
      <Card scrollable={false} containerClass={styles.recentContainer}>
        <CardText text="Recent Activity" textStyle={} container={}/>
        <Card scrollable={false} containerClass={styles.detailsContainer}>
          <CardText text="Exercise" textStyle={styles.detailsHeader} container={styles.detailsHeaderContainer}/>
        </Card>
        <Card scrollable={false} containerClass={styles.detailsContainer}>
          <CardText text="Meal" textStyle={styles.detailsHeader} container={styles.detailsHeaderContainer}/>
        </Card>
      </Card>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonsContainer: {
    marginTop: SetMargin(0.1),
  },
  recentContainer: {
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'blue'
  },
  recentHeaderContainer: {

  },
  recentHeader: {

  },
  detailsContainer: {
    
  },
  detailsHeaderContainer: {

  },
  detailsHeader: {

  }
});
