import NavigationStack from "../../../components/NavigationStack/NavigationStack";
import ManageProgram from "../Screens/Manage/ManageProgram";
import EditProgram from "../Screens/Manage/EditProgram";
import GroceryProgram from "../Screens/Manage/GroceryProgram";
import { NavigationArrayProps } from "../../../components/NavigationStack/NavigationStack";

export default function ManageProgramNavigation() {

    const manageNavArray: NavigationArrayProps[] = [
        {component: ManageProgram, name: 'manage-program', options: false, backgroundColor: '', borderColor: '', fontColor: ''},
        {component: EditProgram, name: 'edit-program', options: false, backgroundColor: '', borderColor: '', fontColor: ''},
        {component: GroceryProgram, name: 'grocery-program', options: false, backgroundColor: '', borderColor: '', fontColor: ''},

    ]

    return <NavigationStack navArray={manageNavArray} />
}