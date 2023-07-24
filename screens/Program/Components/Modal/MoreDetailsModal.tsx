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

  const handleBuy = () => {
    console.log('buy')
  };

  const handleDay = () => {
    if (arrowImage === true) {
      setArrowImage(false);
    } else {
      setArrowImage(true);
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
        <Card scrollable={false} containerClass={styles.contentContainer}>
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
                <CardText
                semiBold
                  text={`By ${cardArray.author}`}
                  container={styles.authorContainer}
                  textStyle={styles.author}
                />
                <CardText
                semiBold
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
              <PhoneButton
              semiBold
                buttonContainerClass={styles.buyButtonContainer}
                buttonClass={styles.buyButton}
                textClass={styles.buyButtonText}
                onPress={handleBuy}
                text="Buy"
              />
            </Card>
            <Card
              scrollable={false}
              containerClass={styles.fourthLevelContainer}
            >
                <CardText text='Budget' container={styles.budgetContainer} textStyle={styles.budget} />
              <CardText
              semiBold
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
                    <CardText text={'Exercise'} container={styles.regimenHeaderContainer} textStyle={styles.regimenHeader} />
                  </Card>
                </Card>
                <Card containerClass={styles.programRegimenContainer}>
                  <Card containerClass={styles.programRegimenHeaderContainer}>
                    <CardText text={'Meal'} container={styles.regimenHeaderContainer} textStyle={styles.regimenHeader} />
                  </Card>
                </Card>
              </Card>
            )}
            {programType === "Exercise" && (
              <Card containerClass={styles.previewProgramContainer}>
                <Card containerClass={styles.programRegimenContainer}>
                  <CardText text="Exercise" textStyle={styles.regimenHeader} container={styles.regimenHeaderContainer} />
                </Card>
              </Card>
            )}
            {programType === "Meal" && (
              <Card containerClass={styles.previewProgramContainer}>
                <Card containerClass={styles.programRegimenContainer}>
                  <CardText text="Meal" textStyle={styles.regimenHeader} container={styles.regimenHeaderContainer} />
                </Card>
              </Card>
            )}
          </Card>
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
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: 'white',
    flex: 1
  },
  image: {
    height: SetMargin(.30),
    width: '100%'
  },
  closeCircle: {},

  detailsContainer: {},
  cardInfoContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  topLevelContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
    width: '100%'
  },
  headerContainer: {
    width: '75%',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
    alignItems: 'flex-end'
  },
  header: {
    fontSize: 26, 
    letterSpacing: 1
  },
  priceContainer: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  price: {
    fontSize: 22
  },
  secondLevelContainer: {
    flexDirection: 'row',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
    width: '100%'
  },
  authorCertificationContainer: {
    width: '39%',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
  },
  authorContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  author: {
    fontSize: 18
  },
  certificationContainer: {
    width: '100%',
    alignItems: 'center'
  },
  certification: {
    fontSize: 18
  },
  reviewContainer: {
    width: '28%',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  cycleContainer: {
    width: '33%',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cycleTextContainer: {
    width: '100%',
    flexDirection: 'row'
  },
  cycleText: {
    fontSize: 20, 
  },
  thirdLevelContainer: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
    width: '100%'
  },
  detailBlurbContainer: {
    width: '90%',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
    paddingBottom: 10
  },
  detailBlurb: {
    fontSize: 16
  },
  buyButtonContainer: {
    width: '100%',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
    alignItems: 'center',
  },
  buyButton: {
    width: '35%',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
    alignItems: 'center',
    padding: 5,
    borderRadius: 25,
    backgroundColor: 'black'
  },
  buyButtonText: {
    color: 'white',
    fontSize: 18,
    letterSpacing: .7
  },
  fourthLevelContainer: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
    width: '100%',
    flexDirection: 'row'
  },
  budgetContainer: {
    width: '33%',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  budget: {},
  previewContainer: {
    width: '33%',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  preview: {
    fontSize: 20
  },
  daysButtonContainer: {
    width: '34%',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  daysButton: {
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center'
  },
  daysButtonText: {
    fontSize: 20
  },
  closeCircleContainer: {},
  previewProgramContainer: {},
  programRegimenContainer: {},
  regimenHeaderContainer: {},
  regimenHeader: {},
  programRegimenHeaderContainer: {}
});
