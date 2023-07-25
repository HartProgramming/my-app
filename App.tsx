import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogIn from "./screens/LogIn/LogIn";
import HomeScreen from "./screens/Home/HomeScreen";
import SignUp from "./screens/SignUp/SignUp";
import NavBar from "./components/NavBar/NavBar";
import TodayScreen from "./screens/Activity/Screens/MainActivity";
import { useState } from "react";
import { AntDesign, Entypo, FontAwesome5, Ionicons } from "@expo/vector-icons";
import Settings from "./screens/Settings/Settings";
import SettingNavigation from "./screens/Settings/SettingNav";
import UserColors from "./screens/Details/CustomColors";
import DetailsNavigation from "./screens/Details/Navigation/DetailsNavigation";


const Stack = createNativeStackNavigator<any>();

export interface NavBarInterface {
  label: string;
  route: string;
  component: any;
  image: any;
  backgroundColor: string;
  fontColor: string;
  borderColor: string;
}

const App: React.FC = () => {

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogin = (status: boolean) => {
    setIsLoggedIn(status);
  };

    return (
      <>
        <NavigationContainer>
          <Stack.Navigator>
            {!isLoggedIn ? (
              <>
                <Stack.Screen
                  name="Home"
                  options={{ headerShown: false }}
                  component={HomeScreen}
                />
                <Stack.Screen name="Log In" options={{ headerShown: false }}>
                  {(props) => <LogIn handleLogin={handleLogin} />}
                </Stack.Screen>
                <Stack.Screen
                  name="Sign Up"
                  options={{ headerShown: false }}
                  component={SignUp}
                />
                <Stack.Screen
                  name="current-details"
                  options={{ headerShown: false }}
                >
                  {(props) => <DetailsNavigation />}
                </Stack.Screen>
                <Stack.Screen name="Setting Navigation" options={{ headerShown: false }}>
                  {(props) => <SettingNavigation />}
                </Stack.Screen>
                <Stack.Screen
                  name="User Colors"
                  options={{ headerShown: false }}
                  component={UserColors}
                />
              </>
            ) : (
              <>
                <Stack.Screen name="Main" options={{ headerShown: false }}>
                  {(props) => <NavBar />}
                </Stack.Screen>
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  
};

export default App;
