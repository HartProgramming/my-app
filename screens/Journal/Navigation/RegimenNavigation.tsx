import NavigationStack, {
  NavigationArrayProps,
} from "../../../components/NavigationStack/NavigationStack";
import SearchExercise from "../Screens/SearchExercise";
import SearchMeal from "../Screens/SearchMeal";
import CreateExercise from "../Screens/CreateExercise";
import CreateMeal from "../Screens/CreateMeal";
import SearchRegimen from "../Screens/SearchRegimen";
import CreateRegimen from "../Screens/CreateRegimen";
import MainRegimen from "../Screens/MainRegimen";

 
export default function RegimenNavigation(){
 
    const regimenArray: NavigationArrayProps[] =[
        {options: false, name: 'main-regimen', component: MainRegimen, backgroundColor: '', borderColor: '', fontColor: ''},
        {options: false, name: 'search', component: SearchRegimen, backgroundColor: '', borderColor: '', fontColor: ''},
        {options: false, name: 'search-exercise', component: SearchExercise, backgroundColor: '', borderColor: '', fontColor: ''},
        {options: false, name: 'search-meal', component: SearchMeal, backgroundColor: '', borderColor: '', fontColor: ''},
        {options: false, name: 'create', component: CreateRegimen, backgroundColor: '', borderColor: '', fontColor: ''},
        {options: false, name: 'create-exercise', component: CreateExercise, backgroundColor: '', borderColor: '', fontColor: ''},
        {options: false, name: 'create-meal', component: CreateMeal, backgroundColor: '', borderColor: '', fontColor: ''},
    ]

    return(
        <NavigationStack navArray={regimenArray} />
    )
} 