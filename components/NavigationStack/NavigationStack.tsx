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
}

export default function NavigationStack({navArray}: NavigationProps){
 
  const navStack = createStackNavigator();


    return(
        <navStack.Navigator>
            {navArray.map((value) => {
                return(
                    <navStack.Screen name={value.name} options={{headerShown: value.options}} component={value.component}/>
                )
            })}
        </navStack.Navigator>
    )
}