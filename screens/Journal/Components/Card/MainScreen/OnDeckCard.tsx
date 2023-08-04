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

  const renderList: any = ({ item }) => (
    Object.keys(item).map((value) => (
      <Card scrollable={false} containerClass={styles.listItemContainer}>
        <CardText
          text={value}
          container={styles.labelContainer}
          textStyle={styles.label}
        />
        <CardText
          text={item[value]}
          container={styles.infoContainer}
          textStyle={styles.info}
        />
      </Card>
    )));

  useEffect(() => {
    console.log(array.map((value)=> Object.keys(value).map((item) => item)))
  }, [array]);

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
        <Card scrollable={false} containerClass={styles.cardHeaderContainer}>
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
          <FlatList renderItem={renderList} data={array} />
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
    marginTop: SetMargin(0.02),
    marginBottom: SetMargin(-0.02),
  },
  onDeckContainer: {},
  headerContainer: {
    width: "35%",
  },
  onDeckHeader: {
    fontSize: 28,
  },
  onDeckButtonsContainer: {
    flexDirection: "row",
    width: "65%",
  },
  cardContainer: {
    marginTop: SetMargin(0.02),
  },
  cardHeaderContainer: {
    backgroundColor: "rgba(255,255,255,.7)",
    width: "95%",
    alignSelf: "center",
    alignItems: "center",
    marginTop: SetMargin(0.04),
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 5,
    flexDirection: "row",
  },
  imageHeader: {
    fontSize: 28,
    color: "black",
    letterSpacing: 1.15,
  },
  onDeckImage: {
    width: "95%",
    height: SetMargin(0.3),
    alignSelf: "center",
    borderRadius: 25,
    marginTop: SetMargin(0.04),
  },
  onDeckAddButtonContainer: {
    position: "absolute",
    marginTop: SetMargin(0.279),
    width: "35%",
    marginLeft: SetMargin(0.307),
    zIndex: 2,
  },
  onDeckAddButton: {
    backgroundColor: "rgba(0,0,0,.83)",
    alignItems: "center",
    padding: 5,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  onDeckAddButtonText: {
    fontSize: 24,
    color: "white",
    letterSpacing: 1.1,
  },
  carDetailsContainer: {},
  listItemContainer: {},
  labelContainer: {},
  label: {fontSize: 24},
  infoContainer: {},
  info: {fontSize: 24},
  imageHeaderContainer: {},
  cardDetailsContainer: {},
});
