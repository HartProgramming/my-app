import { ListRenderItem, StyleSheet } from "react-native";
import OnDeckButton from "../../Buttons/OnDeckButton";
import { Image } from "react-native";
import PhoneButton from "../../../../../components/Inputs/PhoneButton";
import SetMargin from "../../../../../functions/SetMargin";
import { useState, useEffect } from "react";
import Chicken from "../../../../../images/cardimages/chickenbreast.jpeg";
import Card from "../../../../../components/Card/Card";
import CardText from "../../../../../components/Card/CardText";
import { FlatList } from "react-native";
import { ListItemProps } from "react-native-elements";

interface OnDeckCardProps {
  array: any;
}

export default function OnDeckCard({ type, array }: OnDeckCardProps) {
  const [addImage, setAddImage] = useState<any>();
  const [imageHeader, setImageHeader] = useState<string>("");
  const [highlighted, setHighlighted] = useState<boolean>(false);

  const handleAdd = () => {};

  const handleOnDeckImage = (event: string) => {
    if (event === "Meal") {
      setImageHeader("Chicken");
      setHighlighted(true);
    } else if (event === "Exercise") {
      setImageHeader("Jogging");
      setHighlighted(false);
    }
  };

  useEffect(() => {
    setImageHeader("Chicken");
  }, []);

  const renderList: any = ({ item }) =>
    Object.keys(item).map((value) => (
      <Card scrollable={false} containerClass={styles.listItemContainer}>
        <CardText
        medium
          text={`${value}: `}
          container={styles.labelContainer}
          textStyle={styles.label}
        /> 
        <CardText
        regular
          text={item[value]}
          container={styles.infoContainer}
          textStyle={styles.info}
        />
      </Card>
    ));

  return (
    <Card scrollable={false} containerClass={styles.onDeckContainer}>
      <Card scrollable={false} containerClass={styles.onDeckHeaderContainer}>
        <CardText
          bold
          text="On Deck"
          container={styles.headerContainer}
          textStyle={styles.onDeckHeader}
        />
        <Card scrollable={false} containerClass={styles.onDeckButtonsContainer}>
          <OnDeckButton
            onPress={() => handleOnDeckImage("Meal")}
            highlight={highlighted}
            label="Meal"
          />
          <OnDeckButton
            onPress={() => handleOnDeckImage("Exercise")}
            highlight={!highlighted}
            label="Exercise"
          />
        </Card>
      </Card>
      <Card scrollable={false} containerClass={styles.cardContainer}>
        <Card scrollable={false} containerClass={styles.topLevelCard}>
          <CardText
            bold
            container={styles.imageHeaderContainer}
            textStyle={styles.imageHeader}
            text={imageHeader}
          />
          <PhoneButton
            semiBold
            buttonContainerClass={styles.onDeckAddButtonContainer}
            buttonClass={styles.onDeckAddButton}
            textClass={styles.onDeckAddButtonText}
            onPress={handleAdd}
            text="Add"
          />
        </Card> 

        <Card scrollable={false} containerClass={styles.cardDetailsContainer}>
          <FlatList keyExtractor={(item) => item.label} numColumns={2} renderItem={renderList} data={array} />
        </Card>
      </Card>
    </Card>
  );
}

const styles = StyleSheet.create({
  onDeckHeaderContainer: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "center",
    marginTop: SetMargin(0.1),
    marginBottom: SetMargin(-0.02),
  },
  headerContainer: {
    width: "35%",
  },
  onDeckHeader: {
    fontSize: 28,
    letterSpacing: .5
  },
  onDeckButtonsContainer: {
    flexDirection: "row",
    width: "65%",
  },
  cardContainer: {
    marginTop: SetMargin(0.04),
    flexDirection: "column",
    borderWidth: 2,
    width: "90%",
    alignSelf: "center",
    borderRadius: 15,
      padding: 10
  },
  onDeckContainer: {},
  topLevelCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 2
  },
  imageHeader: {
    fontSize: 24,
    color: "black",
    letterSpacing: 1.15,
  },

  onDeckAddButtonContainer: {
    width: '35%',
  },
  onDeckAddButton: {
    backgroundColor: "black",
    alignItems: "center",
    padding: 5,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  },
  onDeckAddButtonText: {
    fontSize: 24,
    color: "white",
    letterSpacing: 1.1,
  },
  listItemContainer: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  labelContainer: {},
  label: { fontSize: 22 },
  infoContainer: {},
  info: { fontSize: 19 },
  imageHeaderContainer: {},
  cardDetailsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: SetMargin(.01)
  },
});
