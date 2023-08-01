import { useNavigation } from "@react-navigation/native";

interface NavigationParams {
  [key: string]: any;
} 

export default function Navigation(
  { navigation }: any,
  route: string,
  params?: object
) {
  return () => navigation.navigate(route, params);
}
