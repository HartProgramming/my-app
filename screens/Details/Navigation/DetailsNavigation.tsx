import NavigationStack, {
  NavigationArrayProps,
} from "../../../components/NavigationStack/NavigationStack";
import HealthGoalsDetails from "../HealthGoalsDetails";
import ActivityDetails from "../ActivityDetails";
import StandardDetails from "../StandardDetails";
import UserColors from "../UserColors";

export const detailsNavigationArray: NavigationArrayProps[] = [
  {
    label: "Color Mode",
    options: false,
    component: UserColors,
    name: "user-colors",
    backgroundColor: "",
    fontColor: "",
    borderColor: "",
    componentProps: "Sign Up",
  },
  {
    label: "Physical Details",
    options: false,
    component: StandardDetails,
    name: "physical-info",
    backgroundColor: "",
    fontColor: "",
    borderColor: "",
    componentProps: "Sign Up",
  },
  {
    label: "Fitness Goals",
    options: false,
    component: HealthGoalsDetails,
    name: "fitness-goals",
    backgroundColor: "",
    fontColor: "",
    borderColor: "",
    componentProps: "Sign Up",
  },
  {
    label: "Current Activity",
    options: false,
    component: ActivityDetails,
    name: "current-activity",
    backgroundColor: "",
    fontColor: "",
    borderColor: "",
    componentProps: "Sign Up",
  },
];

export default function DetailsNavigation() {
  return (
    <>
      <NavigationStack navArray={detailsNavigationArray} />
    </>
  );
}
