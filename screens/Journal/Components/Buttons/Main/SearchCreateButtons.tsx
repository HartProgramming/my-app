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
  const handleShowModal = (event: string) => {
    if (event === "noShow") {
      visible(false);
      type("noShow");
    } else if (event === "search") {
      visible(true);
      type("search");
    } else if (event === "create") {
      visible(true);
      type("create");
    }
  };

  return (
    <Card scrollable={false} containerClass={styles.buttonsContainer}>
      <MainRegimenButton
        label="Search"
        left={false}
        onPress={() => handleShowModal("search")}
      />
      <MainRegimenButton
        label="Create"
        left={true}
        onPress={() => handleShowModal("create")}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    marginTop: SetMargin(0.05),
    flexDirection: "row",
    width: "100%",
  },
});
