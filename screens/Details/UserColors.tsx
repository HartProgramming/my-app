import Card from "../../components/Card/Card";
import CardText from "../../components/Card/CardText";
import { StyleSheet } from "react-native";
import PhoneButton from "../../components/Inputs/PhoneButton";
import { useNavigation } from "@react-navigation/native";
import SetMargin from "../../functions/SetMargin";
import {
  darkMode,
  lightMode,
  greenMode,
  purpleMode,
  blueMode,
} from "../../objects/ColorClass";
import Navigation from "../../objects/NavigationType";
import { ColorInterface } from "../../objects/ColorInterface";
import { MaterialIcons } from "@expo/vector-icons";
import { useEffect } from "react";

export default function UserColors({ route }: any) {
  const navigation = useNavigation();

  const handlePostColor = (event: any) => {
    /* Handles sending color to backend */
    if (component === "Sign Up") {
      /* Send to Backend */
    } else {
      /* Update Color Scheme while still in screen */
    }
  };

  interface ColorSchemeButtonProps {
    colorScheme: ColorInterface[];
    label: string;
  }

  const dark: ColorInterface[] = [
    {
      backgroundColor: darkMode.background,
      color: darkMode.font,
      borderColor: darkMode.border,
    },
  ];

  const light: ColorInterface[] = [
    {
      backgroundColor: lightMode.background,
      color: lightMode.font,
      borderColor: lightMode.border,
    },
  ];

  const green: ColorInterface[] = [
    {
      backgroundColor: greenMode.background,
      color: greenMode.font,
      borderColor: greenMode.border,
    },
  ];

  const purple: ColorInterface[] = [
    {
      backgroundColor: purpleMode.background,
      color: purpleMode.font,
      borderColor: purpleMode.border,
    },
  ];

  const blue: ColorInterface[] = [
    {
      backgroundColor: blueMode.background,
      color: blueMode.font,
      borderColor: blueMode.border,
    },
  ];

  const component = route.params;

  const colorSchemeButtons: ColorSchemeButtonProps[] = [
    { colorScheme: dark, label: "Dark Mode" },
    { colorScheme: light, label: "Light Mode" },
    { colorScheme: green, label: "Green Mode" },
    { colorScheme: blue, label: "Blue Mode" },
    { colorScheme: purple, label: "Purple Mode" },
  ];

  return (
    <Card scrollable={false} containerClass={styles.container}>
      <Card scrollable={false} containerClass={styles.infoContainer}>
        <CardText
          text={component === "Update" ? "" : "Step 1 of 5"}
          container={styles.headerContainer}
          textStyle={styles.header}
        />
        <CardText
          text="Choose Color Scheme"
          container={styles.headerContainer}
          textStyle={styles.header}
        />
        <Card scrollable={false} containerClass={styles.buttonsContainer}>
          {component === "Sign Up" &&
            colorSchemeButtons.map((value) => {
              return (
                
                <PhoneButton
                semiBold
                  buttonClass={[
                    styles.button,
                    {
                      backgroundColor: value.colorScheme[0].backgroundColor,
                      borderColor: value.colorScheme[0].borderColor,
                    },
                  ]}
                  buttonContainerClass={styles.buttonContainer}
                  textClass={[
                    styles.buttonText,
                    { color: value.colorScheme[0].color },
                  ]}
                  text={value.label}
                  onPress={() => handlePostColor(value.colorScheme)}
                />
              );
            })}
          {component === "Update" &&
            colorSchemeButtons.map((value) => {
              return (
                <PhoneButton
                semiBold
                  buttonClass={[
                    styles.button,
                    {
                      backgroundColor: value.colorScheme[0].backgroundColor,
                      borderColor: value.colorScheme[0].borderColor,
                    },
                  ]}
                  buttonContainerClass={styles.buttonContainer}
                  textClass={[
                    styles.buttonText,
                    { color: value.colorScheme[0].color },
                  ]}
                  text={value.label}
                  onPress={() => handlePostColor(value.colorScheme)}
                />
              );
            })}
        </Card>
        <Card containerClass={styles.nextButtonCard} scrollable={false}>
        {component === 'Sign Up' && (
          <PhoneButton semiBold text="Next" onPress={Navigation({ navigation }, "physical-info")} buttonContainerClass={styles.buttonContainer} buttonClass={styles.button} textClass={styles.nextButtonText}/>
        )}
        </Card>
       
      </Card>
      <Card containerClass={styles.backButtonLevelContainer}>
        
        {component === "Update" && (
          <PhoneButton
            image={
              <MaterialIcons
                name="keyboard-arrow-left"
                size={50}
                color={"black"}
              />
            }
            onPress={Navigation({ navigation }, "update-info")}
            text=""
            buttonContainerClass={styles.backButtonContainer}
            buttonClass={styles.backButton}
            textClass={styles.backButtonText}
          />
        )}
      </Card>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButtonLevelContainer: {
    flexDirection: "row",
    width: "100%",
    marginTop: SetMargin(0.1),
    alignItems: "center",
    justifyContent: "center",
  },
  backButtonContainer: {
    marginTop: SetMargin(0.04),
    width: "90%",
    flexDirection: "row",
  },
  backButton: {
    width: "25%",
    alignItems: "center",
    justifyContent: "center",
  },
  backButtonText: {},
  infoContainer: {
    marginTop: SetMargin(0.12),
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
    marginTop: SetMargin(-0.02),
  },
  nextButtonCard: {

  },
  buttonContainer: {
    width: "75%",
    alignSelf: "center",
    padding: 7.5,
  },
  button: {
    padding: 15,
    borderRadius: 15,
    borderStyle: "solid",
    borderWidth: 2,
  },
  buttonText: {
    fontSize: 24,
    textAlign: 'left',
    letterSpacing: .8
  },
  nextButtonText: {
    fontSize: 26,
    textAlign: 'center',
    letterSpacing: 1
  }
});
