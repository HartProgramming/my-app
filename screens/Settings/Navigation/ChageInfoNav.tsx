import NavigationStack from "../../../components/NavigationStack/NavigationStack";
import { NavigationArrayProps } from "../../../components/NavigationStack/NavigationStack";
import ChangeInfo from "../ChangeInfo";
import UserColors from "../../Details/UserColors";
import StandardDetails from "../../Details/StandardDetails";
import HealthGoalsDetails from "../../Details/HealthGoalsDetails";
import ActivityDetails from "../../Details/ActivityDetails";

export default function ChangeInfoNavigation() {
  const changeInfoNavArray: NavigationArrayProps[] = [
    {
      label: "Update Info",
      options: false,
      component: ChangeInfo,
      name: "update-info",
      backgroundColor: "",
      fontColor: "",
      borderColor: "",
    },
    {
      label: "Color Mode",
      options: false,
      component: UserColors,
      name: "user-colors",
      backgroundColor: "",
      fontColor: "",
      borderColor: "",
      componentProps: 'Update'
    },
    {
      label: "Physical Details",
      options: false,
      component: StandardDetails,
      name: "physical-info",
      backgroundColor: "",
      fontColor: "",
      borderColor: "",
      componentProps: "Update",
    },
    {
      label: "Fitness Goals",
      options: false,
      component: HealthGoalsDetails,
      name: "fitness-goals",
      backgroundColor: "",
      fontColor: "",
      borderColor: "",
      componentProps: 'Update'
    },
    {
      label: "Current Activity",
      options: false,
      component: ActivityDetails,
      name: "current-activity",
      backgroundColor: "",
      fontColor: "",
      borderColor: "",
      componentProps: 'Update'
    },
  ];

  return <NavigationStack navArray={changeInfoNavArray} />;
}
