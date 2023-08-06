import { StyleSheet } from "react-native";
import PhoneButton from "../../../../../components/Inputs/PhoneButton";
import Card from "../../../../../components/Card/Card";
import CardText from "../../../../../components/Card/CardText";
import { AntDesign } from "@expo/vector-icons";
import SetMargin from "../../../../../functions/SetMargin";


interface CompleteCardProps{
    completeText: string;
    completeType: 'Complete' | 'Meal' | 'Exercise';
    setType: any;
}

export default function CompleteCard({completeText, completeType, setType}: CompleteCardProps){


    return(
        <Card scrollable={false} containerClass={styles.completeCard}>
            <CardText semiBold text={completeText} container={styles.completeTextContainer} textStyle={styles.completeText} />
            <Card scrollable={false} containerClass={styles.buttonContainer}>
                <AntDesign onPress={() => setType(completeType)} name="check" size={24} color={'white'} />
            </Card>
        </Card>
    )
}

const styles = StyleSheet.create({
    completeCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%',
        alignSelf: 'center',
        marginTop: SetMargin(.02),
        alignItems: 'center',

    },
    completeTextContainer: {
        width: '60%'
    },
    completeText: {
        fontSize: 20,
        letterSpacing: .3
    },
    buttonContainer: {
        width: SetMargin(.06),
        height: SetMargin(.05),
        backgroundColor: 'black',
        padding: 5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
   
})