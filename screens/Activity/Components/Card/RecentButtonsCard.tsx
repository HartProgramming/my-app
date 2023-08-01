import { StyleSheet } from "react-native";
import Card from "../../../../components/Card/Card";
import RecentActivityImageButton from "../Button/RecentActivityImageButton";
import ActivityModal from "../Modal/ActivityModal";
import { RecentButtonsCardProps } from "../../Interfaces/Interface";
import { useState } from "react";

export default function RecentButtonsCard({ array }: RecentButtonsCardProps) {
  const [modal, setModal] = useState<string>("");

  return (
    <Card scrollable={false} containerClass={styles.container}>
      <Card scrollable={false} containerClass={styles.recentImagesContainer}>
        {array.map((value: any) => {
          return (
            <>
              <RecentActivityImageButton
                label={
                  value.Exercise.length === 0 ? value.Meal : value.Exercise
                }
                source={value.Image}
                showModal={() => setModal(value.Exercise)}
              />
              <ActivityModal
                showHide={() => setModal("")}
                details={value}
                visible={
                  modal === value.Exercise
                    ? true
                    : modal === value.Meal
                    ? true
                    : false
                }
              />
            </>
          );
        })}
      </Card>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {},
  recentImagesContainer: { flexDirection: "row", justifyContent: "center" },
});
