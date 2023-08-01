import { StyleSheet, Image, Text } from "react-native";
import PhoneButton from "../../../../components/Inputs/PhoneButton";
import { useEffect, useState } from "react";
import SetMargin from "../../../../functions/SetMargin";
import * as Font from 'expo-font';

interface CardImageProps {
  source: any;
  label: string | undefined;
  onPress?: any;
  showModal: any;
}

export default function RecentActivityImageButton({
  onPress,
  source,
  label,
  showModal,
}: CardImageProps) {
  const [data, setData] = useState();

  const handleImageClick = () => {
    showModal(true);
  };

  return (
    <PhoneButton
      image={<Image style={styles.imageStyle} source={source} />}
      onPress={handleImageClick}
      buttonContainerClass={styles.buttonContainer}
      buttonClass={styles.button}
      textClass={styles.buttonText}
      text={label}
      semiBold={true}
    />
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
  },
  button: {
    width: "100%",
  },
  buttonText: {
    textAlign: "center",
    position: "absolute",
    color: "white",
    fontSize: 20,
    backgroundColor: "rgba(0,0,0, .6)",
    width: "100%",
    height: SetMargin(0.035),

    fontFamily: 'poppins-bold',
    letterSpacing: .7
  },
  imageStyle: {
    height: SetMargin(0.17),
    width: SetMargin(0.17),
    alignItems: "center",
    justifyContent: "center",
    borderStyle: 'solid',
    borderColor: 'white',
    borderWidth: 4
  },
});
