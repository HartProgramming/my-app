import Card from "../../../components/Card/Card";
import { StyleSheet } from "react-native";
import RegimenButton from "../Components/Buttons/RegimenButton";
import Navigation from "../../../objects/NavigationType";
import { useNavigation } from "@react-navigation/native";



export default function CreateRegimen(){
    
    const navigation = useNavigation();

    return(
        <Card scrollable={false} containerClass={styles.container}>
            <Card scrollable={false} containerClass={styles.buttonsContainer}>
                <RegimenButton label="Exercise" onPress={Navigation({navigation}, 'create-exercise')} />
                <RegimenButton label="Meal" onPress={Navigation({navigation}, 'create-meal')} />
                <RegimenButton label="Go Back" onPress={Navigation({navigation}, 'main-regimen')} />
            </Card>
        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    buttonsContainer: {

    }
})