import { useNavigation } from "@react-navigation/native"
import Card from "../../components/Card/Card"
import { StyleSheet } from "react-native"

export default function DetailsSummary(){

    return(
        <Card scrollable={false} containerClass={styles.container}>

        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    }
})