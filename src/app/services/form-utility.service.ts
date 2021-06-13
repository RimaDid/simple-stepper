import { FormGroup } from '@angular/forms';
import { User } from '../models/user.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StepsService } from './steps.service';
import { StepDirection } from '../models/step.model';

interface FormValue {
  [key:string]: string | number | boolean;
}
interface Form {
  [key:string]: FormValue;
}

@Injectable({
  providedIn: 'root'
})
export class FormUtilityService {

  private user: User = new User();
  private  cachedFormsValue: Form = {};
  private currentFormStep = this.stepService.currentStep$;

  constructor(
    private router: Router,
    private stepService: StepsService
  ) { }

  private get currentStepIndex(): string {
    return this.currentFormStep.value!.stepIndex!.toString()
  }
  public getUser(): User {
    return this.user;
  }
  /**
   * Stepper navigation &
   * step completion verification
   */
  public goToStep(path: string, direction: StepDirection = StepDirection.next): void {
    if(direction === StepDirection.end) {
      this.router.navigate([`/${path}`, this.user.userName], {state: {user: this.user}});
      return;
    }
    if(direction === StepDirection.next) {
      this.completeStep();
    }
    this.router.navigate([`form/${path}`]);
  }
  private completeStep(): void {
    if(this.currentFormStep.value){
      const current = this.currentFormStep.value;
      current.isComplete = true;
      this.stepService.setCurrentStep(current);
    }
  }

  /**
   * Collect form parts from different steps to create the body request
   */
  public collectFormParts(formValue: FormValue) {
    this.setCachedForm(formValue);
    this.user = new User({...this.user,...formValue});
  }

 
  public setCachedForm(value: FormValue) {
     this.cachedFormsValue[this.currentStepIndex] =  value;
  }

  public populateForm(currentForm: FormGroup) {
    if(!this.cachedFormsValue[this.currentStepIndex] || Object.keys(this.cachedFormsValue[this.currentStepIndex]).length === 0) {
      return;
    }
    currentForm.setValue(this.cachedFormsValue[this.currentStepIndex]);
  }

}
