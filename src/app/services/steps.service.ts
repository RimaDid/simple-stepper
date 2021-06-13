import { Router } from '@angular/router';

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators'
import { StepModel } from '../models/step.model';

export const STEPS = [
  { stepIndex: 1, isComplete: true, stepTitle: 'Introduction', routerLink: 'intro' },
  { stepIndex: 2, isComplete: false, stepTitle: 'Personal Information', routerLink: 'personal-info' },
  { stepIndex: 3, isComplete: false, stepTitle: 'Email & Consent', routerLink: 'consent' }
];

@Injectable({
  providedIn: 'root'
})
export class StepsService {

  private steps$: BehaviorSubject<StepModel[]> = new BehaviorSubject<StepModel[]>(STEPS);
  public currentStep$: BehaviorSubject<StepModel | null> = new BehaviorSubject<StepModel | null>(null);

  constructor(private router: Router) {
    this.currentStep$.next(this.steps$.value[0]);
    this.router.navigate([`../form/${this.steps$.value[0].routerLink}`])
  }

  public setCurrentStep(step: StepModel): void {
    this.currentStep$.next(step);
  }

  public get currentStep(): Observable<StepModel | null> {
    return this.currentStep$.asObservable().pipe(
      tap(() => { 
        this.isFirstStep(); 
        this.isLastStep();
       }));
  }

  public get steps(): Observable<StepModel[]> {
    return this.steps$.asObservable();
  }

  public isLastStep(): boolean {
    return this.currentStep$.value?.stepIndex === this.steps$.value.length;
  }
  public isFirstStep(): boolean {
    return this.currentStep$.value?.stepIndex === this.steps$.value[0].stepIndex;
  }
}


