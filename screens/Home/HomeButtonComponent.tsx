import { StyleSheet } from "react-native"
import PhoneButton from "../../components/Inputs/PhoneButton";
import SetMargin from "../../functions/SetMargin";
import { Text } from "react-native";

interface MainButtonProps {
  label: string;
  onPress: any;
}


  export default function MainButton({label, onPress}: MainButtonProps){

    return(
        <PhoneButton semiBold={true} onPress={onPress} text={label} buttonClass={styles.button} buttonContainerClass={styles.buttonContainer} textClass={styles.buttonText}/>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: "center",
        marginBottom: SetMargin(.02)
      },
      buttonText: {
        color: "white",
        textAlign: "center",
        fontSize: 24,
        letterSpacing: 1.15,
      },
      button: {
        borderRadius: 50,
        padding: 15,
        backgroundColor: "#8c52ff",
        elevation: 5,
        width: '60%',
        shadowColor: 'gray',
        shadowOffset: {
          width: 5,
          height: 5
        },
        shadowOpacity: 1,
        shadowRadius: 9,
      },
})

