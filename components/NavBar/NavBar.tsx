import React from "react";
import PhoneButton from "../Inputs/PhoneButton";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function NavBar({buttonArr}: {buttonArr: any[]}){

    const navigation = useNavigation()

    const transScreen = (route: any) => {
        navigation.navigate(route as never)
    }

    return(
        <View style={styles.container}>
            {buttonArr.map((value: any) => (
                <PhoneButton key={value.text} text={value.text} onPress={() => transScreen(value.route)} buttonClass={styles.buttonClass} buttonContainerClass={styles.buttonContainerClass} textClass={styles.textClass} ></PhoneButton>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 75,
        backgroundColor: 'green'
    },
    buttonClass: {
        display: 'flex'
    },
    buttonContainerClass: {
        display: 'flex'
    },
    textClass: {
        fontSize: 18
    }
})