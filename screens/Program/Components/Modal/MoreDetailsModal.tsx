import { Modal } from "react-native";
import { StyleSheet } from "react-native";
import Card from "../../../../components/Card/Card";
import CardText from "../../../../components/Card/CardText";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { ProgramCardProps } from "../Card/ProgramCard";
import PhoneButton from "../../../../components/Inputs/PhoneButton";
import { ProgramDetailsInterface } from "../Interfaces/ProgramDetailsInterface";
import { Image } from "react-native";
import { useEffect, useState } from "react";
import SetMargin from "../../../../functions/SetMargin";

interface MoreDetailsModalProps {
  visible: boolean;
  showHide: any;
  cardArray: ProgramCardProps;
  programType: "Complete" | "Meal" | "Exercise";
  programArray: ProgramDetailsInterface[];
}

export default function MoreDetailsModal({
  visible,
  showHide,
  cardArray,
  programType,
  programArray,
}: MoreDetailsModalProps) {
  const [reviews, setReviews] = useState<any>();
  const [arrowImage, setArrowImage] = useState<boolean>(true);
  const [programArrayCounter, setProgramArrayCounter] = useState<number>(0);
  const [regimenArray, setRegimenArray] = useState<ProgramDetailsInterface>(
    programArray[0]
  );

  const handleBuy = () => {
    console.log("buy");
  };

  const handleDay = () => {
    if (arrowImage === true) {
      setArrowImage(false);
      setRegimenArray(programArray[1]);
    } else {
      setArrowImage(true);
      setRegimenArray(programArray[0]);
    }
  };

  useEffect(() => {
    const reviewArray: JSX.Element[] = [];
    for (let i = 0; i < cardArray.review; i++) {
      reviewArray.push(<AntDesign name="star" size={20} color="black" />);
    }
    setReviews(reviewArray);
  }, []);

  return (
    <Modal visible={visible} transparent animationType="fade">
      <Card scrollable={false} containerClass={styles.container}>
        <Card scrollable={false} containerClass={styles.noScroll}>
        <Card scrollable={true} containerClass={styles.contentContainer}>
          <Image style={styles.image} source={cardArray.cardImage} />
          <Card scrollable={false} containerClass={styles.cardInfoContainer}>
            <Card scrollable={false} containerClass={styles.topLevelContainer}>
              <CardText
                bold
                text={cardArray.title}
                container={styles.headerContainer}
                textStyle={styles.header}
              />
              <CardText
                bold
                text={`${cardArray.price}`}
                container={styles.priceContainer}
                textStyle={styles.price}
              />
            </Card>
            <Card
              scrollable={false}
              containerClass={styles.secondLevelContainer}
            >
              <Card
                scrollable={false}
                containerClass={styles.authorCertificationContainer}
              >
               <CardText semiBold text="Member: " container={styles.memberContainer} textStyle={styles.member}/>
                <CardText
                  medium
                  text={cardArray.userType}
                  container={styles.certificationContainer}
                  textStyle={styles.certification}
                />
              </Card>
              <Card scrollable={false} containerClass={styles.reviewContainer}>
                {reviews}
              </Card>
              <Card scrollable={false} containerClass={styles.cycleContainer}>
                <CardText
                  semiBold
                  text={`Cycle: ${cardArray.cycle} Day`}
                  container={styles.cycleTextContainer}
                  textStyle={styles.cycleText}
                />
              </Card>
            </Card>
            <Card
              scrollable={false}
              containerClass={styles.thirdLevelContainer}
            >
              <CardText
                regular
                text={cardArray.info}
                container={styles.detailBlurbContainer}
                textStyle={styles.detailBlurb}
              />
               <CardText
                  semiBold
                  text={`By ${cardArray.author}`}
                  container={styles.authorContainer}
                  textStyle={styles.author}
                />
            </Card>
            <Card
              scrollable={false}
              containerClass={styles.fourthLevelContainer}
            >
              <CardText
                text="Budget"
                container={styles.budgetContainer}
                textStyle={styles.budget}
              />
              <CardText
                bold
                text="Preview"
                container={styles.previewContainer}
                textStyle={styles.preview}
              />
              <PhoneButton
                medium
                text="Day"
                onPress={handleDay}
                buttonContainerClass={styles.daysButtonContainer}
                buttonClass={styles.daysButton}
                textClass={styles.daysButtonText}
                image={
                  arrowImage ? (
                    <MaterialIcons
                      name="arrow-right"
                      size={24}
                      color={"black"}
                    />
                  ) : (
                    <MaterialIcons
                      name="arrow-left"
                      size={24}
                      color={"black"}
                    />
                  )
                }
              />
            </Card>
          </Card>

          <Card scrollable={false} containerClass={styles.detailsContainer}>
            {programType === "Complete" && (
              <Card containerClass={styles.previewProgramContainer}>
                <Card containerClass={styles.programRegimenContainer}>
                  <Card containerClass={styles.programRegimenHeaderContainer}>
                    <CardText
                      semiBold
                      text={"Exercise"}
                      container={styles.regimenHeaderContainer}
                      textStyle={styles.regimenHeader}
                    />
                    <Card
                      containerClass={styles.columnLabelContainer}
                      scrollable={false}
                    >
                      <CardText
                        medium
                        container={[styles.labelContainer, styles.borderRight]}
                        textStyle={styles.label}
                        text="Exercise"
                      />
                      <CardText
                        medium
                        container={styles.labelContainer}
                        textStyle={styles.label}
                        text='Amount'
                      />
                    </Card>
                  </Card>
                  <Card
                    scrollable={false}
                    containerClass={styles.regimenDetailsContainer}
                  >
                    {regimenArray.exerciseArray.map((value) => {
                      return (
                        <Card
                          scrollable={false}
                          containerClass={
                            styles.exerciseRegimenDetailsContainer
                          }
                        >
                          <CardText
                            regular
                            textStyle={styles.exerciseLabel}
                            container={styles.exerciseLabelContainer}
                            text={value.Exercise}
                          />
                          <CardText
                            regular
                            textStyle={styles.exerciseInfo}
                            container={styles.exerciseInfoContainer}
                            text={
                              value.Reps > 0
                                ? `Reps: ${value.Reps}`
                                : value.Miles > 0
                                ? `Miles: ${value.Miles}`
                                : value.Minutes > 0
                                ? `Minutes: ${value.Minutes}`
                                : ""
                            }
                          />
                        </Card>
                      );
                    })}
                  </Card>
                </Card>
                <Card containerClass={styles.programRegimenContainer}>
                  <Card containerClass={styles.programRegimenHeaderContainer}>
                    <CardText
                      semiBold
                      text={"Meal"}
                      container={styles.regimenHeaderContainer}
                      textStyle={styles.regimenHeader}
                    />
                    <Card
                      containerClass={styles.columnLabelContainer}
                      scrollable={false}
                    >
                      <CardText
                        medium
                        container={[styles.labelContainer, styles.borderRight]}
                        textStyle={styles.label}
                        text="Time"
                      />
                      <CardText
                        medium
                        container={[styles.labelContainer, styles.borderRight]}
                        textStyle={styles.label}
                        text="Meal"
                      />
                      <CardText
                        medium
                        container={[styles.labelContainer, styles.borderRight]}
                        textStyle={styles.label}
                        text="Calories"
                      />
                      <CardText
                        medium
                        container={styles.labelContainer}
                        textStyle={styles.label}
                        text="Protein"
                      />
                    </Card>
                  </Card>
                  {regimenArray.mealArray.map((value) => {
                    return (
                      <Card
                        scrollable={false}
                        containerClass={styles.mealRegimenDetailsContainer}
                      >
                        <CardText
                          regular
                          textStyle={styles.mealTimeLabel}
                          container={styles.mealTimeLabelContainer}
                          text={`${value.time} : `}
                        />
                        <CardText
                          regular
                          textStyle={styles.mealLabel}
                          container={styles.mealLabelContainer}
                          text={`${value.Meal} ${value.Calories}kCal ${value.Protein}g`}
                        />
                      </Card>
                    );
                  })}
                </Card>
              </Card>
            )}
            {programType === "Exercise" && (
              <Card containerClass={styles.previewProgramContainer}>
                <Card containerClass={styles.programRegimenContainer}>
                  <CardText
                    semiBold
                    text="Exercise"
                    textStyle={styles.regimenHeader}
                    container={styles.regimenHeaderContainer}
                  />
                  <Card
                    containerClass={styles.columnLabelContainer}
                    scrollable={false}
                  >
                    <CardText
                      medium
                      container={[styles.labelContainer, styles.borderRight]}
                      textStyle={styles.label}
                      text="Exercise"
                    />
                    <CardText
                      medium
                      container={styles.labelContainer}
                      textStyle={styles.label}
                      text='Amount'
                    />
                  </Card>
                </Card>
                <Card
                  scrollable={false}
                  containerClass={styles.regimenDetailsContainer}
                >
                  {regimenArray.exerciseArray.map((value) => {
                    return (
                      <Card
                        scrollable={false}
                        containerClass={styles.exerciseRegimenDetailsContainer}
                      >
                        <CardText
                          regular
                          textStyle={styles.exerciseLabel}
                          container={styles.exerciseLabelContainer}
                          text={value.Exercise}
                        />
                        <CardText
                          regular
                          textStyle={styles.exerciseInfo}
                          container={styles.exerciseInfoContainer}
                          text={
                            value.Reps > 0
                              ? `Reps: ${value.Reps}`
                              : value.Miles > 0
                              ? `Miles: ${value.Miles}`
                              : value.Minutes > 0
                              ? `Minutes: ${value.Minutes}`
                              : ""
                          }
                        />
                      </Card>
                    );
                  })}
                </Card>
              </Card>
            )}
            {programType === "Meal" && (
              <Card containerClass={styles.previewProgramContainer}>
                <Card containerClass={styles.programRegimenContainer}>
                  <CardText
                    semiBold
                    text="Meal"
                    textStyle={styles.regimenHeader}
                    container={styles.regimenHeaderContainer}
                  />
                  <Card
                    containerClass={styles.columnLabelContainer}
                    scrollable={false}
                  >
                    <CardText
                      medium
                      container={[styles.labelContainer, styles.borderRight]}
                      textStyle={styles.label}
                      text="Time"
                    />
                    <CardText
                      medium
                      container={[styles.labelContainer, styles.borderRight]}
                      textStyle={styles.label}
                      text="Meal"
                    />
                    <CardText
                      medium
                      container={[styles.labelContainer, styles.borderRight]}
                      textStyle={styles.label}
                      text="Calories"
                    />
                    <CardText
                      medium
                      container={styles.labelContainer}
                      textStyle={styles.label}
                      text="Protein"
                    />
                  </Card>
                </Card>
                <Card
                  scrollable={false}
                  containerClass={styles.regimenDetailsContainer}
                >
                  {regimenArray.mealArray.map((value) => {
                    return (
                      <Card
                        scrollable={false}
                        containerClass={styles.mealRegimenDetailsContainer}
                      >
                        <CardText
                          regular
                          textStyle={styles.mealTimeLabel}
                          container={styles.mealTimeLabelContainer}
                          text={`${value.time} : `}
                        />
                        <CardText
                          regular
                          textStyle={styles.mealLabel}
                          container={styles.mealLabelContainer}
                          text={`${value.Meal} ${value.Calories} ${value.Protein}`}
                        />
                      </Card>
                    );
                  })}
                </Card>
              </Card>
            )}
          </Card>
          <Card scrollable={false} containerClass={styles.bottomLevelContainer}>
            <PhoneButton
              semiBold
              buttonContainerClass={styles.buyButtonContainer}
              buttonClass={styles.buyButton}
              textClass={styles.buyButtonText}
              onPress={handleBuy}
              text="Buy"
            />
            <Card scrollable={false} containerClass={styles.closeCircleContainer}>
            <AntDesign
              onPress={showHide}
              style={styles.closeCircle}
              name="closecircle"
              size={40}
              color={"black"}
            />
            </Card>
           
          </Card>
        </Card>
        </Card>
      </Card>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noScroll: {
    flex: 1
  },
  borderRight: {
    borderRightColor: 'black',
    borderRightStyle: 'solid',
    borderRightWidth: 2
},
  borderLeft: {
    borderLeftColor: 'black',
    borderLeftStyle: 'solid',
    borderLeftWidth: 2
  },
  contentContainer: {
    backgroundColor: "white",
    height: SetMargin(1)
  },
  image: {
    height: SetMargin(0.3),
    width: "100%",
  },
  detailsContainer: {},
  cardInfoContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  topLevelContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  headerContainer: {
    width: "75%",

    alignItems: "center",
  },
  header: {
    fontSize: 26,
    letterSpacing: 1,
  },
  priceContainer: {
    width: "25%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'black'
  },
  price: {
    fontSize: 22,
    color: 'white'
  },
  secondLevelContainer: {
    flexDirection: "row",

    width: "100%",
  },
  memberContainer:{
    width: '100%',
    alignItems: 'center'
  },
  member: {
    fontSize: 18
  },
  authorCertificationContainer: {
    width: "36%",
    flexDirection: 'column'
  },
  authorContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center'
  },
  author: {
    fontSize: 18,
  },
  certificationContainer: {
    width: "100%",
    alignItems: "center",
  },
  certification: {
    fontSize: 18,
  },
  reviewContainer: {
    width: "31%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  cycleContainer: {
    width: "33%",

    alignItems: "center",
    justifyContent: "center",
  },
  cycleTextContainer: {
    width: "100%",
    flexDirection: "row",
  },
  cycleText: {
    fontSize: 20,
  },
  thirdLevelContainer: {

    width: "100%",
  },
  detailBlurbContainer: {
    width: "90%",
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",

    paddingBottom: 10,
  },
  detailBlurb: {
    fontSize: 16,
  },

  fourthLevelContainer: {
    borderTopStyle: "solid",
    borderTopColor: "black",
    borderTopWidth: 2,
    width: "100%",
    flexDirection: "row",
  },
  budgetContainer: {
    width: "33%",
  
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  budget: {},
  previewContainer: {
    width: "33%",

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  preview: {
    fontSize: 26,
    letterSpacing: 1
  },
  daysButtonContainer: {
    width: "34%",

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  daysButton: {
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
  },
  daysButtonText: {
    fontSize: 20,
  },
  previewProgramContainer: {

    width: "100%",
  },
  programRegimenContainer: {
    width: "90%",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 2,
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  regimenHeaderContainer: {
    borderBottomStyle: "solid",
    borderBottomColor: "black",
    borderBottomWidth: 2,
    width: "100%",
    alignItems: "center",
  },
  regimenHeader: {
    fontSize: 20,
  },
  programRegimenHeaderContainer: {
    borderBottomStyle: "solid",
    borderBottomColor: "black",
    borderBottomWidth: 2,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  columnLabelContainer: {
    flexDirection: "row",
    width: "100%",
  },
  labelContainer: {
    width: "25%",
  },
  label: {
    fontSize: 16,
    textAlign: 'center'
  },
  regimenDetailsContainer: {

    width: "100%",
  },
  exerciseRegimenContainer: {

    width: "100%",
    flexDirection: "row",
  },
  mealRegimenContainer: {

    width: "100%",
  },
  mealRegimenDetailsContainer: {
    borderBottomStyle: "solid",
    borderBottomColor: "black",
    borderBottomWidth: 2,
    width: "100%",
    flexDirection: "row",
  },
  exerciseRegimenDetailsContainer: {
    flexDirection: "row",
    borderBottomStyle: "solid",
    borderBottomColor: "black",
    borderBottomWidth: 2,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  mealTimeLabelContainer: {
    borderRightStyle: 'solid',
    borderRightColor: 'black',
    borderRightWidth: 2,
    width: '23%',
    marginLeft: SetMargin(.009)
},
  mealTimeLabel: {
    fontSize: 14
  },
  mealLabelContainer: {},
  mealLabel: {},
  exerciseLabelContainer: {
    borderRightStyle: "solid",
    borderRightColor: "black",
    borderRightWidth: 2,
    width: '23%',
    alignItems: 'flex-start',
    marginLeft: SetMargin(.009)
  },
  exerciseLabel: {
    fontSize: 14
  },
  exerciseInfoContainer: {},
  exerciseInfo: {},
  bottomLevelContainer: {

    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  buyButtonContainer: {
    width: "75%",

    alignItems: "flex-end",
    marginLeft: SetMargin(-.03)
  },
  buyButton: {
    width: "70%",

    alignItems: "center",
    padding: 10,
    borderRadius: 35,
    backgroundColor: "black",
  },
  buyButtonText: {
    color: "white",
    fontSize: 26,
    letterSpacing: 0.7,
  },
  closeCircleContainer: {
    width: '25%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',

    padding: 5,
    marginRight: SetMargin(-.04)
  },

  closeCircle: {
 
    alignItems: 'center',
    justifyContent: 'center'
  },

});
