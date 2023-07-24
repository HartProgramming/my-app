import NavigationStack, {
  NavigationArrayProps,
} from "../../../components/NavigationStack/NavigationStack";
import HealthGoalsDetails from "../HealthGoalsDetails";
import ActivityDetails from "../ActivityDetails";
import StandardDetails from "../StandardDetails";
import CustomColors from "../CustomColors";
import UserColors from "../UserColors";

export default function DetailsNavigation() {
  const navigationArray: NavigationArrayProps[] = [
    { options: false, component: UserColors, name: "user-colors", backgroundColor: '', fontColor: '', borderColor: '' },
    { options: false, component: CustomColors, name: "custom-colors", backgroundColor: '', fontColor: '', borderColor: '' },
    { options: false, component: StandardDetails, name: "physical-info", backgroundColor: '', fontColor: '', borderColor: '' },
    { options: false, component: HealthGoalsDetails, name: "fitness-goals", backgroundColor: '', fontColor: '', borderColor: '' },
    { options: false, component: ActivityDetails, name: "current-activity", backgroundColor: '', fontColor: '', borderColor: '' },
  ]; 
 
  return (
    <>
      <NavigationStack navArray={navigationArray} />
    </>
  );
}
