import * as Font from "expo-font";
import { useEffect, useState } from "react";

export default function LoadFonts() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        "poppins-bold": require("../../../../assets/fonts/Poppins/Poppins-Bold.ttf"),
        "poppins-regular": require("../../../../assets/fonts/Poppins/Poppins-Medium.ttf"),
        "poppins-semi-bold": require("../../../../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
      });
      setFontLoaded(true);
    }
    loadFont();
  }, []);

  return fontLoaded;
}
