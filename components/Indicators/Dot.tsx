import { StyleSheet } from "react-native";
import { View } from "react-native";
import SetMargin from "../../functions/SetMargin";


interface DotProps{
    highlighted: boolean; 
}

export default function Dot({highlighted}: DotProps){


    return(
        <View style={[styles.dot, highlighted ? styles.highlightedBackground : styles.standardBackground]}></View>
    )
}

const styles = StyleSheet.create({
    dot: {
        width: SetMargin(.02),
        height: SetMargin(.02),
        borderRadius: 50,
        borderWidth: 2
    },
    standardBackground: {
        backgroundColor: 'white'
    },
    highlightedBackground: {
        backgroundColor: 'black'
    }
})