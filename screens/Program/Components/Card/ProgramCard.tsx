import { PermissionsAndroid, StyleSheet } from "react-native";
import Card from "../../../../components/Card/Card";
import { Image } from "react-native";
import { StyleProp, ViewStyle } from "react-native";
import CardText from "../../../../components/Card/CardText";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import SetMargin from "../../../../functions/SetMargin";
import PhoneButton from "../../../../components/Inputs/PhoneButton";
import { SetStateAction } from "react";
import { TouchableOpacity, Text } from "react-native";

export interface ProgramCardProps {
  container?: StyleProp<ViewStyle>;
  title: string;
  review: 1 | 2 | 3 | 4 | 5;
  price: number;
  info: string;
  author: string;
  budget: 0 | 1 | 2 | 3;
  cycle: number;
  cardImage: any;
  id: string;
  programType: "Exercise" | "Meal" | "Complete";
  userType: "Trainer" | "User";
  detailsModal: any;
}

export default function ProgramCard({
  cardImage,
  cycle,
  author,
  container,
  title,
  price,
  info,
  programType,
  userType,
  detailsModal,
  review,
  budget,
}: ProgramCardProps) {
  const [budgetArray, setBudgetArray] = useState<any>([]);

  const [reviewArray, setReviewArray] = useState<any>([]);
  const [reviewLength, setReviewLength] = useState<number>(review);
  const [budgetLength, setBudgetLength] = useState<number>(0);
  const [budgetElements, setBudgetElements] = useState<any>();
  const [reviewElements, setReviewElements] = useState<any>();

  const handleMore = () => {
    detailsModal(true);
  };

  useEffect(() => {
    const reviewArray: JSX.Element[] = [];
    for (let i = 0; i < review; i++) {
      reviewArray.push(<AntDesign name="star" size={20} color="black" />);
    }

    const budgetArray: JSX.Element[] = [];
    for (let i = 0; i < budget; i++) {
      budgetArray.push(<FontAwesome name="dollar" size={16} color="black" />);
    }

    setReviewElements(reviewArray);
    setBudgetElements(budgetArray);
  }, []);

  return (
    <Card scrollable={false} containerClass={container}>
      <TouchableOpacity onPress={handleMore}>
        <Card scrollable={false} containerClass={styles.topContainer}>
          <Image style={styles.image} source={cardImage} />
          <Card scrollable={false} containerClass={styles.detailsContainer}>
            <Card scrollable={false} containerClass={styles.headerContainer}>
              <Card
                scrollable={false}
                containerClass={styles.headerReviewContainer}
              >
                <CardText
                  semiBold
                  text={title}
                  container={styles.titleContainer}
                  textStyle={styles.title}
                />
                <Card
                  scrollable={false}
                  containerClass={styles.reviewCycleContainer}
                >
                  <Card
                    scrollable={false}
                    containerClass={styles.reviewContainer}
                  >
                    {reviewElements}
                  </Card>
                  <CardText
                    medium
                    text={`${cycle} Day`}
                    container={styles.cycleContainer}
                    textStyle={styles.cycle}
                  />
                </Card>
              </Card>

              <CardText
                bold={true}
                text={`${price}`}
                container={styles.priceContainer}
                textStyle={styles.price}
              />
            </Card>

            <Card scrollable={false} containerClass={styles.infoContainer}>
              <CardText
                medium
                container={styles.infoDetailsContainer}
                textStyle={styles.infoDetails}
                text={info}
              />
            </Card>
          </Card>
        </Card>

        <Card scrollable={false} containerClass={styles.bottomContainer}>
          <CardText
            medium
            text={`Cert: ${userType}`}
            container={styles.authorContainer}
            textStyle={styles.author}
          />
          <Card scrollable={false} containerClass={styles.programTypeCardContainer}>
            <CardText
              medium
              textStyle={styles.programType}
              container={styles.programTypeContainer}
              text={`Type: ${programType}`}
            />
            <Card
              scrollable={false}
              containerClass={styles.budgetContainer}
            >
              <CardText
                medium
                text={budget > 0 ? `Budget: ` : ""}
                container={styles.budgetLabelContainer}
                textStyle={styles.budgetLabel}
              />
              {budgetElements}
            </Card>
          </Card>
        </Card>
      </TouchableOpacity>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
  },
  topContainer: {
    flexDirection: "row",
    width: "100%",
  },
  image: {
    width: "33%",
    height: "100%",
    borderBottomRightRadius: 15,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 2,
  },
  detailsContainer: {
    width: "70%",
    flexDirection: "column",
  },
  headerReviewContainer: {
    width: "70%",
    flexDirection: "column",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    height: SetMargin(0.05),
    marginBottom: SetMargin(0.015),
  },
  titleContainer: {},
  title: {
    fontSize: 20,
    marginLeft: SetMargin(0.03),
  },
  reviewContainer: {
    flexDirection: "row",
    marginLeft: SetMargin(0.03),
  },
  reviewCycleContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cycleContainer: {
    width: "43%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  cycle: {
    fontSize: 14,
    marginTop: SetMargin(0.005),
  },
  priceContainer: {
    backgroundColor: "black",
    width: "30%",
    flexDirection: "row",
    padding: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  price: {
    fontSize: 18,
    color: "white",
  },
  infoContainer: {
    marginTop: SetMargin(0.01),
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  infoDetailsContainer: {
    width: "90%",
  },
  infoDetails: {
    fontSize: 14,
  },

  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: SetMargin(0.002),
    width: '100%'
  },
  authorContainer: {
    width: "35%",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",

  },
  author: {
    fontSize: 16,
    marginLeft: SetMargin(0.01),
  },
  budgetContainer: {
    flexDirection: "row",
    justifyContent: 'flex-end',
    alignItems: "center",
    width: '75%'
  },
  budgetLabelContainer: {
    alignItems: "center",
    justifyContent: "flex-end",
  
  },
  budgetLabel: {
    fontSize: 16,
  },
  programTypeCardContainer: {
    flexDirection: "row",
    width: "35%",

  },
  programTypeContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-start",
  },
  programType: {
    fontSize: 16,
    marginRight: SetMargin(0.01),
  },
});
