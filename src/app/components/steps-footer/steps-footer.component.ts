import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-steps-footer',
  templateUrl: './steps-footer.component.html',
  styleUrls: ['./steps-footer.component.scss']
})
export class StepsFooterComponent {
  @Input() public isLastStep: boolean = false;
  @Input() public isFirstStep: boolean = false;
  @Input() public isStepComplete: boolean = false;

  @Output() public onNextStep: EventEmitter<boolean> = new EventEmitter<boolean>(false);
  @Output() public onPreviousStep: EventEmitter<boolean> = new EventEmitter<boolean>(false);

}
