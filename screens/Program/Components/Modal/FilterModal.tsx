import Card from "../../../../components/Card/Card";
import FilterDropdown from "../Dropdown/FilterDropdown";
import FilterSortBaseModal from "./FilterSortBaseModal";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

export interface ProgramModalProps {
  visible: any;
  cards: any;
  showHide: any;
}

export interface FilterArrayProps {
    label: string | number;
    value: string | number;
    checked: boolean;
    title?: 'Price' | 'Cycle' | 'Title'
  }

export default function FilterModal({ visible, cards, showHide }: ProgramModalProps) {
  const [filterElements, setFilterElements] = useState<any>();
  const [checkedValueArray, setCheckedValueArray] = useState<[]>([]);
  const [cumulateArray, setCumulateArray] = useState<any>([]);
  const [certificationArray, setCertificationArray] = useState<any>([]);
  const [programArray, setProgramArray] = useState<any>([]);
  const [priceArray, setPriceArray] = useState<any>([]);

  const certificationTypeArray: FilterArrayProps[] = [
    { label: "User", value: "User", checked: false },
    { label: "Trainer", value: "Trainer", checked: false },
  ];

  const programTypeArray: FilterArrayProps[] = [
    { label: "Complete", value: "Complete", checked: false },
    { label: "Exercise", value: "Exercise", checked: false },
    { label: "Meal", value: "Meal", checked: false },
  ];

  const priceTypeArray: FilterArrayProps[] = [
    { label: "0-4.99", value: 4.99, checked: false },
    { label: "5-9.99", value: 9.99, checked: false },
    { label: "10-14.99", value: 14.99, checked: false },
    { label: "15-19.99", value: 19.99, checked: false },
  ];

  useEffect(() => {
    setFilterElements(
      <Card scrollable={false} containerClass={styles.container}>
        <FilterDropdown
        checkedArray={setCertificationArray}
          label="Certification"
          filterArray={certificationTypeArray}
        />
        <FilterDropdown checkedArray={setProgramArray} label="Program" filterArray={programTypeArray} />
        <FilterDropdown checkedArray={setPriceArray} label="Price" filterArray={priceTypeArray} />
      </Card>
    );
  }, []);

  useEffect(() => {
    cards([...certificationArray, ...priceArray, ...programArray])
  }, [checkedValueArray, certificationArray, priceArray, programArray])



  return (
    <FilterSortBaseModal
      filter={filterElements}
      visible={visible}
      showHide={showHide}
      title="Filter"
    />
  );
}

const styles = StyleSheet.create({
  container: {},
});
