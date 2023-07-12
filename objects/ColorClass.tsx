import { StyleProp } from "react-native";
import { StyleSheet } from "react-native";

class ColorClass {
  constructor(public background: string, public font: string, public border: string) {
    (this.background = background), (this.border = border), (this.font = font);
  }
}

const styles = StyleSheet.create({
  darkBackground: {
    backgroundColor: "#191919",
  },
  darkBorder: {
    borderColor: "#636466",
  },
  darkFont: {
    color: "#f7f7f7",
  },
  lightBackground: {
    backgroundColor: "#f7f7f7",
  },
  lightBorder: {
    borderColor: "#3d3d3d",
  },
  lightFont: {
    color: "#191919",
  },
  customBackground: {
    backgroundColor: "#8c52ff",
  },
  customBorder: {
    borderColor: "#8c52ff",
  },
  customFont: {
    color: "white",
  },
});

export const darkMode = new ColorClass(
  '#191919',
  '#f7f7f7',
  '#636466'
);
export const lightMode = new ColorClass(
  '#f7f7f7',
  '#191919',
  '#3d3d3d'
);
export const customMode = new ColorClass(
  '#8c52ff',
  'white',
  '#8c52ff'
);
