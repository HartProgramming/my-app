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

export interface ProgramCardProps {
  container?: StyleProp<ViewStyle>;
  title: string;
  review?: 1 | 2 | 3 | 4 | 5 | undefined;
  price: number;
  info: string;
  author: string;
  budget?: "expensive" | "average" | "affordable";
  cycle: number;
  cardImage: any;
  id: string;
  programType: "Exercise" | "Meal" | "Complete";
  userType: 'Trainer' | 'User';
  buy: any;
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
  buy
}: ProgramCardProps) {
  const [budgetArray, setBudgetArray] = useState<any>([]);

  const [reviewArray, setReviewArray] = useState<any>([]);

  const [budget, setBudget] = useState<any>();
  const [review, setReview] = useState<any>();

  const handleMore = () => {
    console.log('hi')
    buy(true)
  };

  useEffect(() => {
    setReview(
      <Card scrollable={false} containerClass={styles.card}>
        <AntDesign name="star" size={14} color="black" />,
        <AntDesign name="star" size={14} color="black" />,
        <AntDesign name="star" size={14} color="black" />,
        <AntDesign name="star" size={14} color="black" />,
        <AntDesign name="star" size={14} color="black" />,
      </Card>
    );
    setBudget(
      <Card scrollable={false} containerClass={styles.card}>
        <FontAwesome name="dollar" size={14} color={"black"} />,
        <FontAwesome name="dollar" size={14} color={"black"} />,
        <FontAwesome name="dollar" size={14} color={"black"} />,
      </Card>
    );
  }, []);

  return (
    <Card scrollable={false} containerClass={container}>
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
                  <AntDesign name="star" size={14} color="black" />
                  <AntDesign name="star" size={14} color="black" />
                  <AntDesign name="star" size={14} color="black" />
                  <AntDesign name="star" size={14} color="black" />
                  <AntDesign name="star" size={14} color="black" />
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
          text={userType}
          container={styles.authorContainer}
          textStyle={styles.author}
        />
        <PhoneButton
          medium
          onPress={handleMore}
          buttonContainerClass={styles.moreButtonContainer}
          buttonClass={styles.moreButton}
          textClass={styles.moreButtonText}
          text="More"
        />
        <Card
          scrollable={false}
          containerClass={styles.programTypeCardContainer}
        >
          <CardText
            medium
            textStyle={styles.programType}
            container={styles.programTypeContainer}
            text={`Type: ${programType}`}
          />
        </Card>
      </Card>
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
    height: SetMargin(.05),
    marginBottom: SetMargin(.015)
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
    marginTop: SetMargin(.005)
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
    justifyContent: "space-around",
    marginTop: SetMargin(.002)
  },
  authorContainer: {
    width: "45%",
    alignItems: "center",
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  author: {
    fontSize: 16,
    marginLeft: SetMargin(.01)
  },
  moreButtonContainer: {
    backgroundColor: "black",
    width: "20%",
    height: SetMargin(0.033),
    justifyContent: "center",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    alignItems: "center",
  },
  moreButton: {
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
  },
  moreButtonText: {
    color: "white",
    fontSize: 14,
    justifyContent: "center",
    letterSpacing: 0.8,
  },
  programTypeCardContainer: {
    flexDirection: "row",
    width: "35%",
  },
  programTypeContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: 'flex-end'
  },
  programType: {
    fontSize: 14,
    marginRight: SetMargin(.01)
  },
});
