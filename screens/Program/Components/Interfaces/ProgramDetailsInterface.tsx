import { ExerciseActivity } from "../../../Activity/Screens/MainActivity";
import { MealActivity } from "../../../Activity/Screens/MainActivity";

export interface ProgramDetailsInterface {
  day: string;
  mealArray: MealDetailsArray[]; 
  exerciseArray: ExerciseDetailsArray[];
}

export interface MealDetailsArray extends MealActivity {
  time: string;
}
  
export interface ExerciseDetailsArray extends ExerciseActivity {}


