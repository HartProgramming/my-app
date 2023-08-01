import Card from "../../components/Card/Card";
import CardText from "../../components/Card/CardText";
import { StyleSheet, Text } from "react-native";
import PhoneButton from "../../components/Inputs/PhoneButton";
import { useNavigation } from "@react-navigation/native";
import Navigation from "../../objects/NavigationType";
import DetailsNavigation, { detailsNavigationArray } from "../Details/Navigation/DetailsNavigation";
import SetMargin from "../../functions/SetMargin";
import { MaterialIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { NavigationArrayProps } from "../../components/NavigationStack/NavigationStack";



export default function ChangeInfo() {
  const navigation = useNavigation();

 

  return (
    <Card scrollable={false} containerClass={styles.container}>
     <Card scrollable={false} containerClass={styles.topLevelContainer}>
        <CardText bold text="Update Info" container={styles.headerContainer} textStyle={styles.header} />
     </Card>
     <Card scrollable={false} containerClass={styles.detailsButtonsContainer}>
      {detailsNavigationArray.map((value) => {
        return(
          <PhoneButton onPress={Navigation({navigation}, value.name)} semiBold text={value.label} buttonContainerClass={styles.detailsButtonContainer} buttonClass={styles.detailsButton} textClass={styles.detailsButtonText} />
        )
      })}
     </Card>
     <Card scrollable={false} containerClass={styles.backArrowContainer} >
      <MaterialIcons style={styles.backArrow} name='keyboard-arrow-left' size={50} color={'black'} />
     </Card>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  topLevelContainer: {
    width: '100%',
    marginTop: SetMargin(.15)
  },
  headerContainer: {
    alignItems: 'center'
  },
  header: {
    fontSize: 32,
    letterSpacing: 1
  },
  detailsButtonsContainer: {
    borderTopColor: "black",
    borderTopWidth: 2,
    borderStyle: "solid",
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: SetMargin(.1)
  },
  detailsButtonContainer: {
    width: "100%",
    alignItems: "center",
    borderBottomColor: "black",
    borderBottomWidth: 2,
    borderStyle: "solid",
    padding: 15
  },
  detailsButton: {
    alignItems: 'flex-start',
    width: '70%',
    padding: 10,
    justifyContent: 'center',

  },
  detailsButtonText: {
    fontSize: 26,
    letterSpacing: 1.15,
    color: "black",
  },
  backArrowContainer: {
    width: '100%',
    marginTop: SetMargin(.12)
  },
  backArrow: {
    marginLeft: SetMargin(.04)
  }
});
