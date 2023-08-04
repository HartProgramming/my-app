import Card from "../../../components/Card/Card";
import { StyleSheet } from "react-native";
import CardText from "../../../components/Card/CardText";
import Navigation from "../../../objects/NavigationType";
import { useNavigation } from "@react-navigation/native";
import SetMargin from "../../../functions/SetMargin";
import { useEffect, useState } from "react";
import MainRegimenButton from "../Components/Buttons/MainRegimenButton";
import { Image, Text } from "react-native";
import PhoneButton from "../../../components/Inputs/PhoneButton";
import OnDeckButton from "../Components/Buttons/OnDeckButton";
import OnDeckCard from "../Components/Card/MainScreen/OnDeckCard";
import SearchCreateModal from "../../Program/Components/Modal/SearchCreateModal";
import SearchCreateButtons from "../Components/Buttons/Main/SearchCreateButtons";

export default function MainRegimen() {
  const navigation = useNavigation();

  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<'search' | 'create' | 'noShow'>('noShow')

  const DUMMYARRAY = [
    {Calories: 300}, {Sodium: 40}
  ]

  return (
    <Card scrollable={false} containerClass={styles.container}>
        <OnDeckCard array={DUMMYARRAY} />
      <Card scrollable={false} containerClass={styles.buttonsContainer}>
        <SearchCreateButtons visible={setShowModal} type={setModalType} />
      </Card>
      <SearchCreateModal type={modalType} visible={showModal} day="Current" />
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  onDeckContainer: {
    borderWidth: 2,
  },
  buttonsContainer: {
    marginTop: SetMargin(0.1),
    flexDirection: "row",
    width: "100%",
  },
  recentContainer: {
    marginTop: SetMargin(0.1),
  },
  recentHeaderContainer: {
    alignSelf: "center",
  },
  recentHeader: {
    fontSize: 28,
    fontWeight: "bold",
    letterSpacing: 1.2,
  },
  detailsContainer: {
    marginTop: SetMargin(0.01),
    paddingBottom: 5,
  },
  detailsHeaderContainer: {},
  detailsHeader: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1.1,
  },
  recentImagesContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
