import { NestedInterface } from "./NestedInterface";
import PhoneButton from "../Inputs/PhoneButton";
import Navigation from "../../objects/NavigationType";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import SetMargin from "../../functions/SetMargin";

export default function NestedNavigation({
  mainRoute,
  icon,
  component,
  label,
  route,
  textStyle,
  button,
  container,
  fontType
}: NestedInterface) {

  const [fontBold, setFontBold] = useState<boolean>(false);
  const [fontSemi, setFontSemi] = useState<boolean>(false);
  const [fontMedium, setFontMedium] = useState<boolean>(false);
  const [fontRegular, setFontRegular] = useState<boolean>(false);

  const navigation = useNavigation<StackNavigationProp<ScreenParam>>();

  type ScreenParam = {
    screen: { id: number } | undefined;
  };

  const transScreen = (standard: any, screenName: string) => {
    navigation.navigate(standard as any, { screen: screenName } as any);
  };

  const nav = {
    icon: icon,
    component: component,
    label: label,
    route: route,
  };

  useEffect(() => {
    if(fontType === 'bold'){
      setFontBold(true)
    }else if(fontType === 'semiBold'){
      setFontSemi(true);
    }else if(fontType === 'medium'){
      setFontMedium(true);
    }else if(fontType === 'regular'){
      setFontMedium(true);
    }
  }, [fontType])

  return (
    <PhoneButton
      image={icon}
      onPress={() => transScreen(mainRoute, route)}
      text={label}
      textClass={textStyle}
      buttonClass={button}
      buttonContainerClass={container}
      bold={fontBold}
      semiBold={fontSemi}
      medium={fontMedium}
      regular={fontRegular}
    />
  );
}
