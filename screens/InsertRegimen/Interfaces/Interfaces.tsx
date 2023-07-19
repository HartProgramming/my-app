export interface CriteriaMealInterface {
    name: string | undefined;
    brand?: string | undefined;
    ounces?: string | undefined;
    calories: string | undefined;
    protein: string | undefined;
    key: string | undefined;
    resultsBoo: boolean;
  }
  
  export interface CriteriaExerciseInterface {
    name: string | undefined;
    reps?: number | undefined;
    miles?: number | undefined;
    minutes?: number | undefined;
    key: string | undefined;
    resultsBoo: boolean;
  }

  export interface MainRegimenButtonProps {
    label: string;
    onPress: any;
    left: boolean;
  }