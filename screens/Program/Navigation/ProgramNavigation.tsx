import NavigationStack, {
  NavigationArrayProps,
} from "../../../components/NavigationStack/NavigationStack";
import CreateProgram from "../Screens/CreateProgram";
import AvailablePrograms from "../Screens/AvailablePrograms";
import MainProgram from "../Screens/Main/MainProgram";
import ManageProgramNavigation from "./ManageProgramNavigation";

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
    {
      options: false,
      component: ManageProgramNavigation,
      name: "manage-navigation",
      backgroundColor: '',
      borderColor: '',
      fontColor: ''
    },
  ];

  return (
    <>
      <NavigationStack navArray={navigationArray} />
    </>
  );
}
