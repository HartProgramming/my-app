import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogIn from "./screens/LogIn/LogIn";
import HomeScreen from "./screens/Home/HomeScreen";
import SignUp from "./screens/SignUp/SignUp";
import Details from "./screens/Details/Details";
import NavBar from "./components/NavBar/NavBar";
import TodayScreen from "./screens/TodayScreen/TodayScreen";
import InsertRegimen from "./screens/InsertRegimen/InsertRegimen";
import { useState } from "react";
import { AntDesign, Entypo, FontAwesome5 } from "@expo/vector-icons";
import History from "./screens/History/History";
import Settings from "./screens/Settings/Settings";
import SettingNavigation from "./screens/Settings/SettingNav";
import UserColors from "./screens/Details/UserColors";

const Stack = createNativeStackNavigator();

const navBarArray = [
  {
    label: "Today",
    component: TodayScreen,
    image: () => <Entypo name="progress-two" size={24} color={"#8c52ff"} />,
  },
  {
    label: "Input Regimen",
    component: InsertRegimen,
    image: () => <AntDesign name="pluscircle" size={24} color={"#8c52ff"} />,
  },
  {
    label: "History",
    component: History,
    image: () => <FontAwesome5 name="history" size={24} color={"#8c52ff"} />,
  },
  {
    label: "Settings",
    component: Settings,
    image: () => <AntDesign name="setting" size={24} color={"#8c52ff"} />,
  },
];

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
                name="Details"
                options={{ headerShown: false }}
                component={Details}
              />
              <Stack.Screen
                name="User Colors"
                options={{ headerShown: false }}
                component={UserColors}
              />
            </>
          ) : (
            <>
              <Stack.Screen name="Main" options={{ headerShown: false }}>
                {(props) => <NavBar {...props} buttonArr={navBarArray} />}
              </Stack.Screen>
              <Stack.Screen name="Setting" options={{ headerShown: false }}>
                {(props) => <SettingNavigation />}
              </Stack.Screen>
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
