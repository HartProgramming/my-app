import NavigationStack from "../../../components/NavigationStack/NavigationStack";
import { NavigationArrayProps } from "../../../components/NavigationStack/NavigationStack";
import CreateExerciseScreen from "../Screens/Create/CreateExerciseScreen";
import CreateMealScreen from "../Screens/Create/CreateMealScreen";
import CreateProgramScreen from "../Screens/Create/CreateProgramScreen";
import CreateMainScreen from "../Screens/Create/CreateMainScreen";

export default function CreateProgramNavigation() {
  const createNavigationArray: NavigationArrayProps[] = [
    { component: CreateMainScreen, name: "create-main", options: false },
    { component: CreateProgramScreen, name: "create-program", options: false },
    {
      component: CreateExerciseScreen,
      name: "create-exercise",
      options: false,
    },
    { component: CreateMealScreen, name: "create-meal", options: false },
  ];

  return <NavigationStack navArray={createNavigationArray} />;
}
