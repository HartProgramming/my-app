import { StyleSheet } from "react-native";
import { Modal } from "react-native";
import Card from "../../../../components/Card/Card";
import CardText from "../../../../components/Card/CardText";
import { ActivityModalProps } from "../../../Activity/Components/Modal/ActivityModal";
import { useEffect } from "react";
import SetMargin from "../../../../functions/SetMargin";


export default function EditModalBase({visible, showHide, details}: ActivityModalProps){


    return(
        <Modal visible={visible} transparent animationType="fade">
            <Card scrollable={false} containerClass={styles.container}>
                <Card scrollable={false} containerClass={styles.contentContainer}>
                    {details}
                </Card>
            </Card>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,.4)',
        justifyContent: 'flex-end'
    },
    contentContainer: {
        height: SetMargin(.7),
        borderTopRightRadius: 45,
        borderTopLeftRadius: 35,
        width: '100%',
    }
})