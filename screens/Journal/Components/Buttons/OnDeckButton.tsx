import { StyleSheet } from "react-native";
import PhoneButton from "../../../../components/Inputs/PhoneButton";
import { MainRegimenButtonProps } from "../../Interfaces/Interfaces";


interface OnDeckButtonProps {
    label: string;
    left: boolean;
    onPress: any;
}

export default function OnDeckButton({label, left, onPress}: OnDeckButtonProps){

    return(
        <PhoneButton onPress={onPress} text={label} buttonContainerClass={styles.container}  buttonClass={
            left
              ? [styles.button, styles.borderLeft]
              : [styles.button, styles.borderRight]
          } textClass={styles.text}/>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    button: {
        width: '100%',
        alignItems: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        borderStyle: 'solid',
        padding: 5
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    borderLeft: {
        borderLeftColor: 'black',
        borderLeftWidth: 1
    },
    borderRight: {
        borderRightColor: 'black',
        borderRightWidth: 1
    }
})