import { StyleSheet } from "react-native";
import Card from "../../../../components/Card/Card";
import { Image } from "react-native";
import Jogging from '../../../../images/cardimages/joggingstreet.jpeg';


export default function ProgramCard(){


    return(
        <Card scrollable={false} containerClass={styles.container}>
            <Image source={Jogging}/>
        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        
    }
})