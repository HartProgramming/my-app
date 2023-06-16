import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogIn from "./screens/LogIn/LogIn";
import HomeScreen from "./screens/Home/HomeScreen";
import SignUp from "./screens/SignUp/SignUp";
import Details from "./screens/Details/Details";
import NavBar from "./components/NavBar/NavBar";
import { StyleProp, ViewStyle, TextStyle } from "react-native";
import TodayScreen from "./screens/TodayScreen/TodayScreen";

const Stack = createNativeStackNavigator();

interface NavBar {
  text: string;
  route: string;
}

const navBarArray : NavBar[] = [
  {text: "Today's Performance", route: 'Today'},
  {text: "Input Meal/Exercise", route: 'Meal/Exercise'},
  {text: "Settings", route: 'Settings'}
]

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Log In" component={LogIn} />
        <Stack.Screen name="Sign Up" component={SignUp} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Today" component={TodayScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
