import PhoneButton from "../../../../components/Inputs/PhoneButton";
import { StyleSheet } from "react-native";



interface ArrowButtonProps {
    image: any;
    onPress: any;
}

export default function DateArrowButton({image, onPress}: ArrowButtonProps){


    return(
        <PhoneButton text="" onPress={onPress} image={image} buttonContainerClass={styles.container} buttonClass={styles.button} textClass={styles.text}/>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginRight: 10,
    },
    button: {

    },
    text: {

    }
})