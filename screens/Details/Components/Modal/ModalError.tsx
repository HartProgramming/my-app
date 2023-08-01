import { StyleSheet } from "react-native";
import { Modal } from "react-native";
import Card from "../../../../components/Card/Card";
import { ActivityModalProps } from "../../../Activity/Components/Modal/ActivityModal";
import PhoneButton from "../../../../components/Inputs/PhoneButton";



export default function ModalError({details, visible, showHide}:ActivityModalProps){



    return(
        <Modal visible={visible} transparent animationType="fade">
            <Card scrollable={false} containerClass={styles.container}>
                <Card scrollable={false} containerClass={styles.contentContainer}>

                </Card>
            </Card>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    contentContainer: {

    },
})
