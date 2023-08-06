import { StyleSheet } from "react-native";
import Card from "../../../../components/Card/Card";
import CardText from "../../../../components/Card/CardText";

export default function CreateExerciseScreen(){


    return(
        <Card scrollable={false} containerClass={styles.container}>

        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})