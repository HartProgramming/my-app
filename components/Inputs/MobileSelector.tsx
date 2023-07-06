import Card from "../Card/Card";
import { Picker } from "@react-native-picker/picker";

interface MobileSelector {
  minimumNum: number;
  maximumNum: number;
  contentArrayStr?: string[];
  contentArrayNum?: number[];
}

export default function MobileSelector({
  minimumNum,
  maximumNum,
  contentArrayStr,
  contentArrayNum
}: MobileSelector) {
  function generateSelectorContent(
    minimumNum = 0,
    maximumNum = 0,
    contentArrayStr: string[] = [],
    contentArrayNum: number[] = []
  ) {
    if (contentArrayNum.length === 0) {
      maximumNum = contentArrayNum.length;
      for (let item = minimumNum; item <= maximumNum; item++) {
        contentArrayNum.push(item);
      }
    }
  }

  function generateItemsPicker(func: any) {
    interface Items {
      label: string;
      value: string;
    }
    let itemsArr: Items[] = [];
    for (let x of func) {
      itemsArr.push(
        x.label === undefined
          ? { label: `${x}`, value: `${x}` }
          : { label: `${x.label}`, value: `${x.value}` }
      );
    }
    return itemsArr;
  }

  return(
    <Card>
        <Picker>
        {generateItemsPicker(generateSelectorContent(minimumNum).map((value) => {
        return (
          <Picker.Item
            style={styles.pickerItem}
            key={`${value.value}`}
            label={`${value.label}`}
            value={`${value.value}`}
          ></Picker.Item>
        );
      }))}
        </Picker>
    </Card>
  )
}
