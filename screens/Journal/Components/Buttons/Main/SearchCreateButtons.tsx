import { StyleSheet } from "react-native";
import Card from "../../../../../components/Card/Card";
import MainRegimenButton from "../MainRegimenButton";
import { SetStateAction, useEffect, useState } from "react";
import SetMargin from "../../../../../functions/SetMargin";

export interface SearchCreateButtonProps {
  visible: any;
  type: any;
}

export default function SearchCreateButtons({
  visible,
  type,
}: SearchCreateButtonProps) {
  const [modalType, setModalType] = useState<"search" | "create" | "noShow">(
    "noShow"
  );

  useEffect(() => {
    if (modalType === "noShow") {
      visible(false);
      type("noShow");
    } else if (modalType === "search") {
      visible(true);
      type("search");
    } else if (modalType === "create") {
      visible(true);
      type("create");
    }
  }, [modalType]);

  return (
    <Card scrollable={false} containerClass={styles.buttonsContainer}>
      <MainRegimenButton
        label="Search"
        left={false}
        onPress={() => setModalType("search")}
      />
      <MainRegimenButton
        label="Create"
        left={true}
        onPress={() => setModalType("create")}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    marginTop: SetMargin(.05),
    flexDirection: "row",
    width: "100%",
  },
});
