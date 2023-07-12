import Card from "../../components/Card/Card";
import CardText from "../../components/Card/CardHeader";
import { StyleSheet } from "react-native";
import PhoneButton from "../../components/Inputs/PhoneButton";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";
import SetMargin from "../../functions/SetMargin";
import { darkMode, lightMode, customMode } from "../../objects/ColorClass";
import Navigation from "../../objects/NavigationType";
import { useRoute } from "@react-navigation/native";
import { ColorInterface } from "../../objects/ColorInterface";
import { useEffect } from "react";

export default function UserColors() {
  const navigation = useNavigation();

  const dark: ColorInterface[] = [
    {backgroundColor: darkMode.background, color: darkMode.font, borderColor: darkMode.border}
  ]

  const light: ColorInterface[] = [
    {backgroundColor: lightMode.background, color: lightMode.font, borderColor: lightMode.border}
  ]

  useEffect(() => {
    console.log(darkMode.background)
  }, [])

  return (
    <Card scrollable={false} containerClass={styles.container}>
      <Card scrollable={false} containerClass={styles.infoContainer}>
        <CardText
          text="Step 1 of 5"
          container={styles.headerContainer}
          textStyle={styles.header}
        />

        <CardText
          text="Choose Color Scheme"
          container={styles.headerContainer}
          textStyle={styles.header}
        />
        <Card scrollable={false} containerClass={styles.buttonsContainer}>
          <PhoneButton
            buttonClass={[styles.button, {backgroundColor: darkMode.background, borderColor: darkMode.border}]}
            buttonContainerClass={styles.buttonContainer}
            textClass={[styles.buttonText, {color: darkMode.font}]}
            text="Dark Mode"
            onPress={Navigation({ navigation }, "physical-info", dark)}
          />
          <PhoneButton
            buttonClass={[
              styles.button,{backgroundColor:
              lightMode.background, borderColor:
              lightMode.border,
            }]}
            buttonContainerClass={styles.buttonContainer}
            textClass={[styles.buttonText, {color: lightMode.font}]}
            text="Light Mode"
            onPress={Navigation({ navigation }, "physical-info", light)}
          />
          <PhoneButton
            buttonClass={[
              styles.button,{backgroundColor:
              customMode.background, borderColor:
              customMode.border,
            }]}
            buttonContainerClass={styles.buttonContainer}
            textClass={[styles.buttonText, {color: customMode.font}]}
            text="Custom Color Scheme"
            onPress={Navigation({ navigation }, "custom-colors")}
          />
        </Card>
      </Card>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoContainer: {
    marginTop: SetMargin(0.2),
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: SetMargin(0.05),
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "column",
  },
  buttonContainer: {
    width: "85%",
    alignSelf: "center",
    padding: 10,
    marginTop: SetMargin(0.01),
  },
  button: {
    padding: 15,
    borderRadius: 15,
    borderStyle: "solid",
    borderWidth: 2,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
