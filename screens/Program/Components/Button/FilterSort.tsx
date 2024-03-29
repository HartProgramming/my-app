import { SettingsStatic, StyleSheet } from "react-native";
import PhoneButton from "../../../../components/Inputs/PhoneButton";
import Card from "../../../../components/Card/Card";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { SetStateAction, useState } from "react";


interface FilterSortProps {
    showFilterModal: SetStateAction<any>,
    showSortModal: SetStateAction<any>
}

export default function FilterSort({showFilterModal, showSortModal}: FilterSortProps){

    const [showFilter, setShowFilter] = useState<boolean>(false);
    const [showSort, setShowSort] = useState<boolean>(false);

    const handleFilterModal = () => {
        console.log('filter')
        showFilterModal(true)
    }

    const handleSortModal = () => {
        console.log('sort')
        showSortModal(true)
    }
 
    return(
        <Card scrollable={false} containerClass={styles.container}>
            <PhoneButton semiBold image={<FontAwesome name="filter" size={24} color={'white'} />} text="Filter" onPress={handleFilterModal} buttonClass={[styles.button, styles.borderRight]} buttonContainerClass={styles.buttonContainer} textClass={styles.text} />
            <PhoneButton semiBold image={<FontAwesome5 name='sort' size={24} color={'white'} />} text="Sort" onPress={handleSortModal} buttonClass={[styles.button, styles.borderLeft]} buttonContainerClass={styles.buttonContainer} textClass={styles.text}/>
        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '50%'
    },
    button: {
        width: '100%',
        flexDirection: 'row-reverse',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 5,
        backgroundColor: 'black'
    },
    text: {
        fontSize: 26,
        letterSpacing: 1.1,
        color: 'white'
    },
    borderLeft: {
        borderLeftColor: 'white',
        borderLeftStyle: 'solid',
        borderLeftWidth: 2,
    },
    borderRight: {
        borderRightColor: 'white',
        borderRightStyle: 'solid',
        borderRightWidth: 2,
    }
})