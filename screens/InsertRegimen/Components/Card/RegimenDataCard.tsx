import Card from "../../../../components/Card/Card"
import { StyleSheet } from "react-native";
import { Text, Image } from "react-native";
import { useEffect, useState } from "react";
import SetMargin from "../../../../functions/SetMargin";
import { useSafeAreaFrame } from "react-native-safe-area-context";
import { ExerciseActivity } from "../../Screens/MainRegimen";

interface RegimenDataCardProps {
    icon: any;
    dataType: string;
    data: ExerciseActivity;
}

export default function RegimenDataCard({icon, data, dataType}: RegimenDataCardProps){

    const [mealData, setMealData] = useState<object>({});
    const [exerciseData, setExerciseData] = useState<object>({});

    return(
        <Card scrollable={false} containerClass={styles.container}>
            <Image style={styles.image} source={icon} />
            {dataType === 'Exercise' ? (
                <Card scrollable={false} containerClass={styles.textContainer}>
                
                <Text>{data.exercise}</Text>
                <Text>{data.miles}</Text>
                </Card>
            ):(
                <Card scrollable={false} containerClass={styles.textContainer}>
                    <Text>{data.meal}</Text>

                </Card>
            )
            }
        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: SetMargin(.1),
        width: SetMargin(.1)
    },
    textContainer: {

    }
})