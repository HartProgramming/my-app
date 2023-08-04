import { StyleSheet } from "react-native";
import PhoneButton from "../../../../components/Inputs/PhoneButton";
import { MainRegimenButtonProps } from "../../Interfaces/Interfaces";


interface OnDeckButtonProps {
    label: string;
    highlight: boolean;
    onPress: any;
}
 
export default function OnDeckButton({label, highlight, onPress}: OnDeckButtonProps){

    return(
        <PhoneButton semiBold onPress={onPress} text={label} buttonContainerClass={styles.container}  buttonClass={
            highlight
              ? [styles.button, styles.backgroundBlack]
              : [styles.button, styles.backgroundWhite]
          } textClass={!highlight ? styles.textBlack : styles.textWhite}/>
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
        borderWidth: 2,
        borderStyle: 'solid',
        padding: 5
    },
    textBlack: {
        fontSize: 22,
        letterSpacing: .8,
        color: 'black'
    },
    textWhite: {
        fontSize: 22,
        letterSpacing: .8,
        color: 'white'
    },
    borderLeft: {
        borderLeftColor: 'black',
        borderLeftWidth: 1
    },
    borderRight: {
        borderRightColor: 'black',
        borderRightWidth: 1
    },
    backgroundBlack: {
        backgroundColor: 'black'
    },
    backgroundWhite: {
        backgroundColor: 'white'
    }
})