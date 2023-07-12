import {
  ColorPicker,
  TriangleColorPicker,
  toHsv,
  fromHsv,
} from "react-native-color-picker";
import colorReducer from "../../hooks/ColorStateReducer";
import { SliderComponent } from "react-native";
import Card from "../../components/Card/Card";
import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { customMode } from "../../objects/ColorClass";
import PhoneButton from "../../components/Inputs/PhoneButton";
import SetMargin from "../../functions/SetMargin";
import Navigation from "../../objects/NavigationType";
import CardText from "../../components/Card/CardHeader";
import { useNavigation } from "@react-navigation/native";

export default function CustomColors() {
  const [colorBoo, setColorBoo] = useState<boolean>(false);
  const [backgroundColorBoo, setBackgroundColorBoo] = useState<boolean>(false);
  const [fontColorBoo, setFontColorBoo] = useState<boolean>(false);
  const [backgroundColor, setBackgroundColor] = useState<string>("");
  const [fontColor, setFontColor] = useState<string>("");

  const navigation = useNavigation();

  const handleColorChange = (color: any) => {
    if (colorBoo) {
      const hexColor = fromHsv(color);
      setBackgroundColor(hexColor);
      customMode.background = hexColor;
      customMode.border = hexColor;
    } else {
      const hexColor = fromHsv(color);
      setFontColor(hexColor);
      customMode.font = hexColor;
    }
  };

  const setColor = () => {
    if (colorBoo) {
      setColorBoo(false);
      setBackgroundColorBoo(true);
    } else {
      setColorBoo(true);
      setFontColorBoo(true);
    }
  };

  const handleReset = () => {
    setBackgroundColorBoo(false);
    setFontColorBoo(false);
    console.log(fontColorBoo)
  };

  const handleSubmit = () => {
  };

  useEffect(() => {
    console.log(fontColorBoo)
  }, [backgroundColorBoo, fontColorBoo]);

  return (
    <Card scrollable={false} containerClass={styles.container}>
      <CardText
        text="Step 1 of 5"
        textStyle={[
          styles.header,
          { color: fontColorBoo ? customMode.font : "#8c52ff" },
        ]}
        container={styles.headContainer}
      />

      <CardText
        text={`Select Your ${!colorBoo ? "Font" : "Background"} Color`}
        textStyle={[
          styles.header,
          { color: fontColorBoo ? customMode.font : "#8c52ff" },
        ]}
        container={styles.headContainer}
      />

      <Card scrollable={false} containerClass={styles.colorPickerContainer}>
        <TriangleColorPicker
          defaultColor={"#8c52ff"}
          style={styles.colorPicker}
          onColorChange={(color) => handleColorChange(color)}
          onColorSelected={(color) => handleColorChange(color)}
        />
      </Card>
      <Card scrollable={false} containerClass={styles.colorsContainer}>
        <Card scrollable={false} containerClass={styles.colorContainer}>
          <Text
            style={[
              styles.colorFont,
              { color: fontColorBoo ? customMode.font : "#8c52ff" },
            ]}
          >
            Font Color:{" "}
          </Text>
          <View
            style={[styles.colorBox, { backgroundColor: customMode.font }]}
          ></View>
        </Card>
        <Card scrollable={false} containerClass={styles.colorContainer}>
          <Text
            style={[
              styles.colorFont,
              { color: fontColorBoo ? customMode.font : "#8c52ff" },
            ]}
          >
            Background Color:{" "}
          </Text>
          <View
            style={[
              styles.colorBox,
              { backgroundColor: customMode.background },
            ]}
          ></View>
        </Card>
        {fontColorBoo && backgroundColorBoo ? (
          <Card scrollable={false} containerClass={styles.submitResetContainer}>
            <PhoneButton
              buttonClass={[
                styles.submitResetButton,
                {
                  backgroundColor: customMode.background,
                  borderColor: customMode.font,
                },
              ]}
              buttonContainerClass={styles.submitResetButtonContainer}
              textClass={[
                styles.buttonText,
                { color: fontColorBoo ? customMode.font : "#8c52ff" },
              ]}
              text="Reset"
              onPress={handleReset}
            />
            <PhoneButton
              buttonClass={[
                styles.submitResetButton,
                {
                  backgroundColor: customMode.background,
                  borderColor: customMode.font,
                },
              ]}
              buttonContainerClass={styles.submitResetButtonContainer}
              textClass={[
                styles.buttonText,
                { color: fontColorBoo ? customMode.font : "#8c52ff" },
              ]}
              text="Submit"
              onPress={Navigation({ navigation }, "physical-info")
            }
            />
          </Card>
        ) : (
          <PhoneButton
            buttonClass={[
              styles.button,
              {
                backgroundColor: customMode.background,
                borderColor: customMode.font,
              },
            ]}
            buttonContainerClass={styles.buttonContainer}
            textClass={[styles.buttonText, { color: customMode.font }]}
            text={`Set ${!colorBoo ? "Font" : "Background"}`}
            onPress={setColor}
          />
        )}
      </Card>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  headContainer: {
    alignItems: "center",
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
  },
  colorPickerContainer: {},
  colorPicker: {
    backgroundColor: "transparent",
    height: 400,
    width: "80%",
    alignSelf: "center",
  },
  colorsContainer: {
    width: "80%",
    alignSelf: "center",
  },
  setColorContainer: {
    flexDirection: "column",
  },
  colorContainer: {
    padding: 15,
    justifyContent: "flex-start",
    flexDirection: "row",
    marginTop: SetMargin(0.01),
  },
  colorFont: {
    fontSize: 22,
    fontWeight: "bold",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  colorBox: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#8c52ff",
    width: "30%",
  },
  buttonContainer: {
    alignSelf: "center",
    width: "55%",
    marginTop: SetMargin(0.02),
  },
  button: {
    padding: 15,
    alignItems: "center",
    borderRadius: 15,
    borderStyle: "solid",
    borderWidth: 2,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1.15,
    color: "white",
    textAlign: 'center'
  },
  submitResetContainer: {
    flexDirection: "row",
    width: '100%',
    justifyContent: 'space-around',
    marginTop: SetMargin(.05)
  },
  submitResetButtonContainer: {
    alignSelf: "center",
    width: "40%",
  },
  submitResetButton: {
    padding: 10,
    borderRadius: 15,
    borderStyle: "solid",
    borderWidth: 2,
    alignItems: 'center',
    width: '100%',
  },
});
