import Card from "../../components/Card/Card";
import { StyleSheet } from "react-native";


export default function ChangeInfo(){
    

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