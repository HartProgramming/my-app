export interface StandardExerciseProps {
  Exercise: string;
  ExerciseData: StandardExerciseData;
  id: number;
}

export interface StandardMealProps {
  Meal: string;
  Ingredients: StandardIngredientProps[];
  MealData: StandardFoodProps;
}

export interface StandardIngredientProps extends StandardFoodProps {
  Ingredient: string;
}

export interface StandardFoodProps {
  Calories: number;
  Protein: number;
  Sodium: number;
  Sugar: number;
  Cholesterol: number;
  Carbs: number;
}

export interface StandardExerciseData {
  Reps?: number;
  Minutes?: number;
  Miles?: number;
  Weight?: number;
  Sets: number;
}
