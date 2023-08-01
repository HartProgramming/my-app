import { ParamListBase } from "@react-navigation/native"
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack"


interface NavigationProps {
    navArray: NavigationArrayProps[];
}

export interface NavigationArrayProps {
    name: string;
    component: any;
    backgroundColor?: string;
    fontColor?: string;
    borderColor?: string;
    options: boolean;
    label?: string; 
    componentProps?: any
}

export default function NavigationStack({navArray}: NavigationProps){
 
  const navStack = createStackNavigator();

    console.log(navArray[0].component)

    return(
        <navStack.Navigator>
            {navArray.map((value) => {
                console.log(value.componentProps)
                return(
                    <navStack.Screen name={value.name} options={{headerShown: value.options}}>
                       {props => <value.component route={{params: value.componentProps}} />}
                        </navStack.Screen>
                )
            })}
        </navStack.Navigator>
    )
}