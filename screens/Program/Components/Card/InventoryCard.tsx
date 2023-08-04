import { ListRenderItem, StyleSheet } from "react-native";
import Card from "../../../../components/Card/Card";
import CardText from "../../../../components/Card/CardText";
import { FlatList } from "react-native";
import NumberInput from "../../../../components/Inputs/NumberInput";
import { useState } from "react";
import SetMargin from "../../../../functions/SetMargin";

export interface InventoryCardProps {
  array: any;
  type: "ingredient" | "meal";
  quantityType: "required" | "purchase";
  cardStyle: 'text' | 'input'
}

export default function InventoryCard({
  array,
  type,
  quantityType,
  cardStyle
}: InventoryCardProps) {
  console.log(array);
  const [focus, setFocus] = useState<string>('')
  const [inputValue, setInputValue] = useState<string>('');

  const handleNumberChange = (event: string) => {
    setInputValue(event)
  }

  const renderText: ListRenderItem<any> = ({ item }) => {
    return (
      <Card scrollable={false} containerClass={styles.itemContainer}>
        <CardText
          medium
          container={styles.labelContainer}
          textStyle={styles.label}
          text={item.label}
        />
        <CardText
          medium
          container={styles.quantityContainer}
          textStyle={styles.quantity}
          text={`CurQty: ${item.quantity}`}
        />
        <CardText
          medium
          container={styles.quantityContainer}
          textStyle={styles.quantity}
          text={
            quantityType === "required"
              ? `ReqQty: ${item.required}`
              : `PurQty ${item.purchase}`
          }
        />
      </Card>
    );
  };

  const renderInput: ListRenderItem<any> = ({ item }) => {
    return (
      <Card scrollable={false} containerClass={styles.itemContainer}>
        <CardText
          medium
          container={styles.labelContainer}
          textStyle={styles.label}
          text={item.label}
        />
       <NumberInput key={item.label} onFocus={() => setFocus(item.label)} onChange={handleNumberChange} value={inputValue} placeholder="0" secureTextEntry={false} inputContainerClass={styles.inputContainer} inputClass={styles.input} textClass={styles.inputText} />
      </Card>
    );
  };

  return (
    <Card scrollable={false} containerClass={styles.inventoriesContainer}>
      <CardText
        semiBold
        text={type === "ingredient" ? "Ingredients" : "Meals"}
        container={styles.ingredientHeaderContainer}
        textStyle={styles.ingredientHeader}
      />
      <FlatList
        data={array}
        renderItem={cardStyle === 'text' ? renderText : renderInput}
        keyExtractor={(item) => item.label}
        contentContainerStyle={styles.flatList}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    borderWidth: 2,
  },
  inventoriesContainer: {},
  ingredientHeaderContainer: {
    width: "90%",
    alignSelf: "center",
    borderWidth: 2,
    backgroundColor: "black",
  },
  ingredientHeader: {
    fontSize: 24,
    letterSpacing: 0.8,
    color: "white",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    borderLeftWidth: 2,
    alignSelf: "center",
    justifyContent: "center",
    borderBottomWidth: 2,
    borderRightWidth: 2,
  },
  labelContainer: {
    width: "50%",
    overflow: "hidden",
  },
  label: {
    fontSize: 16,
  },
  quantityContainer: {
    width: "25%",
    alignItems: "center",
    justifyContent: "center",
    borderLeftWidth: 2,
  },
  quantity: {
    fontSize: 16,
  },
  flatList: {},
  inputContainer: {
    width: '50%',
    padding: 5
},
  input: {
    width: '100%',
    backgroundColor: 'rgba(0,0,0,.1)',
    borderRadius: 15
  },
  inputText: {
    fontSize: 16,
    marginLeft: SetMargin(.03)
  }
});
