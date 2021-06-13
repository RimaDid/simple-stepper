import { StepModel } from '../../models/step.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-steps-header',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
})
export class StepsComponent {

  @Input() public steps: StepModel[] | null = null;
  @Input() public currentStep: StepModel | null = null;

  @Output() onStepClick: EventEmitter<StepModel> = new EventEmitter<StepModel>();

}