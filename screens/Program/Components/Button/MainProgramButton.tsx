import { StyleSheet } from "react-native";
import PhoneButton from "../../../../components/Inputs/PhoneButton";
import SetMargin from "../../../../functions/SetMargin";


export interface MainProgramButtonProps{
    label: string;
    onPress: any;
}

export default function MainProgramButton({label, onPress}: MainProgramButtonProps){

    return(
        <PhoneButton semiBold onPress={onPress} text={label} buttonClass={styles.button} buttonContainerClass={styles.container} textClass={styles.text} />
    )
} 

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        width: '100%',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderStyle: 'solid',
        borderColor: 'black'
    },
    button: {
        height: SetMargin(.17),
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 30,
        color: 'black',
        letterSpacing: 1
    }
})