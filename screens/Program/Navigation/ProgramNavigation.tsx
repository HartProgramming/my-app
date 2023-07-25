import NavigationStack, {
  NavigationArrayProps,
} from "../../../components/NavigationStack/NavigationStack";
import CreateProgram from "../Screens/CreateProgram";
import AvailablePrograms from "../Screens/AvailablePrograms";
import MainProgram from "../Screens/MainProgram";

export default function ProgramNavigation() {
  const navigationArray: NavigationArrayProps[] = [
    {
      options: false,
      component: MainProgram,
      name: "main-program", 
      backgroundColor: "",
      fontColor: "",
      borderColor: "",
    },
    {
      options: false,
      component: AvailablePrograms,
      name: "available-programs",
      backgroundColor: "",
      fontColor: "",
      borderColor: "",
    },
    {
      options: false,
      component: CreateProgram,
      name: "create-program",
      backgroundColor: "",
      fontColor: "",
      borderColor: "",
    },
  ];

  return (
    <>
      <NavigationStack navArray={navigationArray} />
    </>
  );
}
