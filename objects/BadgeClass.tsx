import React from "react";
import { StyleSheet, View, Modal, Text, TouchableOpacity } from 'react-native';
import ModalPopup from "../components/Modal/Modal";

const proteinImage = require('../images/badgeicons/chicken-leg-icon.svg')


class Badge {
    constructor(public name: string, public image: any, public days: number, public standardGoal: number, public actualResult: number, public moreLess: string, public triggerModal: boolean){
        this.name = name;
        this.image = image;
        this.days = days;
        this.standardGoal = standardGoal;
        this.actualResult = actualResult;
        this.moreLess = moreLess;
        this.triggerModal = this.goalReached();
    }

    public goalReached = (): any => {
        if(this.moreLess === 'less'){
            if(this.standardGoal - this.actualResult >= 0){
                return true
            }else{
                return false
            }
        }else if(this.moreLess === 'more'){
            if(this.actualResult - this.standardGoal >= 0){
                return true
            }else{
                return false
            }
        }
    }

    public dailyStreak = (): string => {
        return `Congratulations you have met your ${this.name} goal for ${this.days} days in a row!`
    }

    public weeklyStreak = (): string => {
        return `Congratulations you have met your ${this.name} goal for ${Math.round(this.days / 52)} weeks in a row!`
    }

    public metGoal = (): string => {
        return `Congrats! You have reached your ${this.name} for the day!`
    }
}

const caloriesConsumed = new Badge('Calories Consumed', proteinImage, 0, 0, 0, 'less', false);