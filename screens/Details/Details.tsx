import { View, Text } from "react-native"
import NumberInput from "../../components/Inputs/NumberInput"
import RNPickerSelect from 'react-native-picker-select'
export default function Details(){

    interface Label {
        age: string;
        height: string;
        weight: string;
        weightGoal: string;
        weeks: string;
        muscle: string
    }

    const label: Label = {
        age: 'Select your age (yrs):',
        height: 'Select your height (ft,in):',
        weight: 'Select your weight (lbs):',
        weightGoal: 'Select your weight loss goal (lbs):',
        weeks: 'Select weeks to reach goal:',
        muscle: 'Select muscle mass gain:'
    }

    return(
        <View>
            <View>
                <Text>Select Your Age:</Text>
                <RNPickerSelect></RNPickerSelect>
            </View>
            <View>
                <Text>Select Your Height:</Text>
                <RNPickerSelect></RNPickerSelect>
            </View>
            <View>
                <Text>Select Your Weight:</Text>
                <RNPickerSelect></RNPickerSelect>
            </View>
            <View>
                <Text>Choose Your Weight Goal:</Text>
                <RNPickerSelect></RNPickerSelect>
            </View>
            <View>
                <Text>Select Weeks to Reach Weight Loss:</Text>
                <NumberInput></NumberInput>
            </View>
            <View>
                <Text>Select Muscle Mass Gains:</Text>
            </View>
        </View>
    )
}