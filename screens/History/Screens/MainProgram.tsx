import { StyleSheet } from "react-native";
import Card from "../../../components/Card/Card";
import ProgramCard from "../Components/Card/ProgramCard";


export default function MainProgram(){


    return(
        <Card scrollable={false} containerClass={styles.container}>

        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})