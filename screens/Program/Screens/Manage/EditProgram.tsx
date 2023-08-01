import { StyleSheet } from "react-native";
import Card from "../../../../components/Card/Card";
import ManageProgramCard from "../../Components/Card/ManageProgramCard";
import { DUMMYMANAGE } from "./DummyArray";
import CardText from "../../../../components/Card/CardText";
import SetMargin from "../../../../functions/SetMargin";
import TraverseDateButton from "../../../Activity/Components/Button/TraverseDateButton";
import { useEffect, useState } from "react";
import MainRegimenButton from "../../../Journal/Components/Buttons/MainRegimenButton";
import SearchCreateModal from "../../Components/Modal/SearchCreateModal";
import { KeyboardAvoidingView } from "react-native";

export default function EditProgram() {
  const [previousDateLog, setPreviousDateLog] = useState<string>("");
  const [nextDateLog, setNextDateLog] = useState<string>("");
  const [modalType, setModalType] = useState<"create" | "search" | "noShow">(
    "noShow"
  );
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    console.log(modalType);
    if (modalType === "create") {
      setShowModal(true);
    } else if (modalType === "search") {
      setShowModal(true);
    }
  }, [modalType]);

  return (
    <Card scrollable={false} containerClass={styles.container}>
      <CardText
        bold
        container={styles.headerContainer}
        textStyle={styles.header}
        text="Edit Program"
      />
      <Card scrollable={false} containerClass={styles.programContainer}>
        <ManageProgramCard type="edit" array={DUMMYMANAGE[0]} />
        <TraverseDateButton
          type="program"
          previous={setPreviousDateLog}
          next={setNextDateLog}
          index={0}
          date="Day 1"
          size={50}
          length={DUMMYMANAGE.length}
        />
      </Card>
      <Card
        scrollable={false}
        containerClass={styles.searchCreateButtonContainer}
      >
        <MainRegimenButton
          onPress={() => setModalType("create")}
          label="Create"
          left
        />
        <MainRegimenButton
          onPress={() => setModalType("search")}
          label="Search"
          left
        />
      </Card>
        <SearchCreateModal day={'Day 1'} visible={showModal} type={modalType} />
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  keyboard: {
    justifyContent: "flex-end",
  },
  headerContainer: {
    width: "80%",
    marginTop: SetMargin(0.1),
  },
  header: {
    fontSize: 32,
    textAlign: "center",
    letterSpacing: 0.8,
  },
  programContainer: {},
  searchCreateButtonContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: SetMargin(0.05),
  },
});
