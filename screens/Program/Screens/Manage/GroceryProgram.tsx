import { StyleSheet } from "react-native";
import Card from "../../../../components/Card/Card";
import CardText from "../../../../components/Card/CardText";
import InventoryCard from "../../Components/Card/InventoryCard";
import SetMargin from "../../../../functions/SetMargin";
import { useEffect, useState } from "react";
import GroceryReplenishButtons from "../../Components/Button/GroceryReplenishButtons";
import PhoneButton from "../../../../components/Inputs/PhoneButton";

export default function GroceryProgram() {
  const [groceryState, setGroceryState] = useState<"replenish" | "custom">(
    "replenish"
  );

  const handleGroceryList = () => {
    /* Post updated grocery list to the backend and add it to the current ingredient and meal list */
  };
  const DUMMYINGREDIENT = [
    { label: "five", quantity: 5, required: 6, purchase: 5 },
    { label: "five", quantity: 5, required: 6, purchase: 5 },
    { label: "five", quantity: 5, required: 6, purchase: 5 },
    { label: "five", quantity: 5, required: 6, purchase: 5 },
    { label: "five", quantity: 5, required: 6, purchase: 5 },
    { label: "five", quantity: 5, required: 6, purchase: 5 },
  ];

  const DUMMYMEAL = [
    { label: "five", quantity: 5, required: 6, purchase: 5 },
    { label: "five", quantity: 5, required: 6, purchase: 5 },
    { label: "five", quantity: 5, required: 6, purchase: 5 },
    { label: "five", quantity: 5, required: 6, purchase: 5 },
    { label: "five", quantity: 5, required: 6, purchase: 5 },
    { label: "five", quantity: 5, required: 6, purchase: 5 },
  ];

  useEffect(() => {
    /* get a backend request that acquires the current inventory grocery array an ingredient array and a meal array*/
  }, []);

  return (
    <Card scrollable={true} containerClass={styles.scroll}>
      <Card scrollable={false} containerClass={styles.container}>
        <CardText
          bold
          text="Current Inventory"
          container={styles.inventoryContainer}
          textStyle={styles.inventory}
        />
        <InventoryCard
          cardStyle="text"
          quantityType="required"
          key={1}
          type="ingredient"
          array={DUMMYINGREDIENT}
        />
        <InventoryCard
          cardStyle="text"
          quantityType="required"
          key={2}
          type="meal"
          array={DUMMYMEAL}
        />
      </Card>
      <Card scrollable={false} containerClass={styles.container}>
        <CardText
          bold
          text="Replenish Inventory"
          container={styles.inventoryContainer}
          textStyle={styles.inventory}
        />
        <InventoryCard
          cardStyle={groceryState === "replenish" ? "text" : "input"}
          quantityType="purchase"
          key={1}
          type="ingredient"
          array={DUMMYINGREDIENT}
        />
        <InventoryCard
          cardStyle={groceryState === "custom" ? "input" : "text"}
          quantityType="purchase"
          key={2}
          type="meal"
          array={DUMMYMEAL}
        />
        <GroceryReplenishButtons onPress={setGroceryState} />
      </Card>
      <PhoneButton
        onPress={handleGroceryList}
        text="Replenish"
        buttonContainerClass={styles.buttonContainer}
        buttonClass={styles.button}
        textClass={styles.buttonText}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  cardContainer: {},
  inventoryContainer: {
    marginTop: SetMargin(0.08),
  },
  inventory: {
    fontSize: 28,
    letterSpacing: 0.8,
  },
  listContainer: {
    width: "90%",
    borderWidth: 2,
    alignSelf: "center",
  },
  buttonContainer: {},
  button: {},
  buttonText: {},
});
