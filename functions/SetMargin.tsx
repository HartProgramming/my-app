import { Dimensions } from "react-native";

export default function SetMargin(percent: number){
    return Dimensions.get('window').height * percent
}