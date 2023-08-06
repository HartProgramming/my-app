import { StyleSheet } from "react-native";
import PhoneButton from "../../../../components/Inputs/PhoneButton";
import SetMargin from "../../../../functions/SetMargin";

interface DateWeekButtonProps {
  label: string;
  onPress: any;
  background: boolean;
}

export default function DateWeekButton({
  label,
  onPress,
  background,
  
}: DateWeekButtonProps) {
  return (
    <PhoneButton
      text={label}
      onPress={onPress}
      buttonContainerClass={styles.container}
      buttonClass={[
        styles.button, background ? styles.highlightedBackground : styles.noHighlightedBackground
      ]}
      textClass={[styles.text,  background ? styles.highlightedBackground : styles.noHighlightedBackground]}
      semiBold={true}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
    borderTopWidth: 0
  },
  button: { 
    padding: 10,
    width: '100%'
  },
  text: {
    fontSize: 20,

    letterSpacing: .5,
    textAlign: 'center'
},
highlightedBackground: {
  backgroundColor: 'black',
  color: 'white'
},
noHighlightedBackground: {
  backgroundColor: 'white',
  color: 'black'
}
});
