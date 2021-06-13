export interface StepModel {
    stepIndex: number | null;
    isComplete: boolean;
    stepTitle: string;
    routerLink: string;
}

export enum StepDirection {
    next = "Next",
    prev = "Previous",
    end = "Completed"
}