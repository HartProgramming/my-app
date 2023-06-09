import { View, TouchableOpacity, Text } from "react-native"
import { StyleSheet } from "react-native"
type HomeButtonComponentProps = {
    text: string;
    press: any;
}

const HomeButtonComponent : React.FC<HomeButtonComponentProps> = ({press, text}) => {


    return(
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={press} style={styles.button}>
            <Text style={styles.buttonText}>{text}</Text>
          </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        display: "flex",
        margin: "auto",
        alignItems: "center",
      },
      buttonText: {
        color: "white",
        textAlign: "center",
      },
      button: {
        borderRadius: 10,
        padding: 14,
        margin: 10,
        backgroundColor: "green",
        width: 200,
      },
})

export default HomeButtonComponent;