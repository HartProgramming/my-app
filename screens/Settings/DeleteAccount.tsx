import Card from "../../components/Card/Card";
import { StyleSheet } from "react-native";


export default function DeleteAccount(){


    return(
        <Card containerClass={styles.container} scrollable={true}>
            
        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})