import MobileSelector from "../../components/Inputs/MobileSelector";
import { StyleSheet, Text } from "react-native";
import Card from "../../components/Card/Card";
import { MobileSelectorInterface } from "../../components/Inputs/MobileSelector";
import CardText from "../../components/Card/CardText";
import { useEffect, useState } from "react";
import { Dimensions } from "react-native";

interface ReusableDetails {
  header: string;
  data: any;
  selectorArray: MobileSelectorInterface[];
}

const containerMargin = Dimensions.get("window").height * 0.2;

export interface SelectorArray extends MobileSelectorInterface {
  label: string;
}

export default function ReusableDetails({
  header,
  selectorArray,
  data,
}: ReusableDetails) {
  const [pickerValue, setPickerValue] = useState<string>("");
  const [dataObj, setDataObj] = useState<any>([]);
  const [focus, setFocus] = useState<string>("");

  const handlePicker = (value: string) => {
    setPickerValue(value);
    console.log(dataObj);
    const obj = {
      key: focus,
      value: value,
    };
    data((prev: any) =>
      [obj, ...prev].filter((obj: any, index: any, self: any) => {
        return index === self.findIndex((o: any) => o.key === obj.key);
      })
    );
  };

  const handleFocus = (value: string) => {
    console.log(value);
    setFocus(value);
  };

  useEffect(() => {
    const uniqueData = dataObj.filter((obj: any, index: any, self: any) => {
      return index === self.findIndex((o: any) => o.key === obj.key);
    });
    console.log(uniqueData);
  }, [focus, pickerValue]);

  return (
    <Card scrollable={false} containerClass={styles.container}>
      <CardText
        text={header}
        container={styles.headerContainer}
        textStyle={styles.header}
      />
      <Card scrollable={false} containerClass={styles.selectorsContainer}>
        {selectorArray.map((value: any) => {
          return (
            <Card scrollable={false} containerClass={styles.selectorDetails}>
              <CardText
                text={value.label}
                container={styles.labelContainer}
                textStyle={styles.label}
              />
              <MobileSelector
                id={value.id}
                handleFocus={() => handleFocus(value.id)}
                cardContainer={value.cardContainer}
                selectedValue={value.selectedValue}
                handleChange={handlePicker}
                pickerStyle={value.pickerStyle}
                pickerItemStyle={value.pickerItemStyle}
                contentArrayStr={value.contentArrayStr}
                contentArrayNum={value.contentArrayNum}
                minimumNum={value.minimumNum}
                maximumNum={value.maximumNum}
                ref={value.ref}
              />
            </Card>
          );
        })}
      </Card>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: containerMargin,
  },
  headerContainer: {
    alignItems: "center",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
  },
  selectorsContainer: {
    flexDirection: "column",
  },
  selectorDetails: {
    flexDirection: "column",
  },
  labelContainer: {
    alignItems: "center",
    padding: 15,
  },
  label: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
