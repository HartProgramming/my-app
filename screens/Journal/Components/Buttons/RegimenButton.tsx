import PhoneButton from "../../../../components/Inputs/PhoneButton";
import { StyleSheet } from "react-native";
import SetMargin from "../../../../functions/SetMargin";


interface SearchCreateButtonProps {
    label: string;
    onPress: any;
}

export default function RegimenButton({label, onPress}: SearchCreateButtonProps){


    return(
        <PhoneButton onPress={onPress} textClass={styles.text} text={label} buttonClass={styles.button} buttonContainerClass={styles.buttonContainer}/>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: '70%',
        alignSelf: 'center',

    },
    button: {
        backgroundColor: 'green',
        alignItems: 'center',
        padding: 15,
        borderColor: 'blue',
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 15,
        margin: SetMargin(.01)
    },
    text: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: 1.2
    }
})