import { ColorPicker, TriangleColorPicker } from "react-native-color-picker";
import colorReducer from "../../hooks/ColorStateReducer";
import { SliderComponent } from "react-native";
import Card from "../../components/Card/Card";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";

export default function UserColors() {

    const [colorBoo, setColorBoo] = useState<boolean>(false);
    const [backgroundColor, setBackgroundColor] = useState<string>('');
    const [fontColor, setFontColor] = useState<string>('');

    const handleColorChange = (color: string) => {
        if(colorBoo){
            setBackgroundColor(color);
        }else {
            setFontColor(color);
        }
    }


  return (
    <Card scrollable={false} containerClass={styles.container}>
      <Card scrollable={false} containerClass={styles.headContainer}>
        <Text style={styles.header}>Color Theme</Text>
      </Card>
      <Card scrollable={false} containerClass={styles.headContainer}>
        <Text>Select Your {colorBoo ? 'Font' : 'Background'} Color</Text>
      </Card>
      <Card scrollable={false} containerClass={styles.colorPickerContainer}>
        <TriangleColorPicker
          defaultColor={"#8c52ff"}
          style={styles.colorPicker}
          onColorChange={(color) => console.log(color)}
          onColorSelected={(color) => console.log(color)}
        />
      </Card>
      <Card scrollable={false} containerClass={styles.colorsContainer}>
        <Card scrollable={false} containerClass={styles.colorContainer}>
          <Text style={styles.colorFont}>Font Color: </Text>
          <View style={styles.colorBox}></View>
        </Card>
        <Card scrollable={false} containerClass={styles.colorContainer}>
          <Text style={styles.colorFont}>Background Color: </Text>
          <View style={styles.colorBox}></View>
        </Card>
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

  colorContainer: {
    padding: 15,
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  colorFont: {
    fontSize: 22,
    fontWeight: "bold",
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  colorBox: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#8c52ff",
    width: '30%'
  },
});
