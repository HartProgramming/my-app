import { MealActivity, ExerciseActivity } from "../Screens/MainActivity"



export interface TodayLogInterface {
    mealArray: MealActivity[];
    exerciseArray: ExerciseActivity[];
    cardHeader: JSX.Element;
} 

export interface TraverseDateButtonProps {
    date?: string | undefined;
    size: number;
    index: number;
    previous: any;
    next: any;
    type: 'performance' | 'log' | 'program';
    length: number;
    onPress?: any;
}
