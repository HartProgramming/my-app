import { StyleSheet, Image, Text } from "react-native";
import PhoneButton from "../../../../components/Inputs/PhoneButton";
import { useState } from "react";
import SetMargin from "../../../../functions/SetMargin";

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
    />
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 5,
  },
  button: {
    width: "100%",
  },
  buttonText: {
    textAlign: "center",
    position: "absolute",
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    backgroundColor: "rgba(0,0,0, .42)",
    width: "100%",
    height: SetMargin(0.035),
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  imageStyle: {
    height: SetMargin(0.13),
    width: SetMargin(0.13),
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
