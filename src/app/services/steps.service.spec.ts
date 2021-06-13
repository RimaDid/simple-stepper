import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from "@angular/router/testing";
import { StepsService } from './steps.service';
const STEPS = [
  { stepIndex: 1, isComplete: true, stepTitle: 'test1', routerLink: 'test1' },
  { stepIndex: 2, isComplete: false, stepTitle: 'test2', routerLink: 'test2' },
  { stepIndex: 3, isComplete: false, stepTitle: 'test3', routerLink: 'test3' }
];
describe('StepsService', () => {
  let service: StepsService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    });
    service = TestBed.inject(StepsService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should setCurrentStep value be equal to get currentStep', () => {
    const dummyStep = { stepIndex: 100, isComplete: false, stepTitle: 'testing', routerLink: 'testStep' };
    service.setCurrentStep(dummyStep);
    service.currentStep.subscribe((res) => { 
      expect(res).toEqual(dummyStep);
    });
  });
  it('#isLastStep should return false if currentStep is not equal to the last elment of STEPS array ', () => {
    const currentStep = { stepIndex: 100, isComplete: false, stepTitle: 'testing', routerLink: 'testStep' };
    service.setCurrentStep(currentStep);
    expect(service.isLastStep()).toBeFalse();
  });
  it('#isFirstStep should return false if currentStep is not equal to the first elment of STEPS array ', () => {
    const currentStep = { stepIndex: 100, isComplete: false, stepTitle: 'testing', routerLink: 'testStep' };
    service.setCurrentStep(currentStep);
    expect(service.isFirstStep()).toBeFalse();
  });
  it('#isLastStep should return true if currentStep is  equal to the last elment of STEPS array ', () => {
    const currentStep = { stepIndex: 3, isComplete: false, stepTitle: 'test3', routerLink: 'test3' };
    service.setCurrentStep(currentStep);
    expect(service.isLastStep()).toBeTrue();
  });
  it('#isFirstStep should return true if currentStep is  equal to the first elment of STEPS array ', () => {
    const currentStep = { stepIndex: 1, isComplete: true, stepTitle: 'test1', routerLink: 'test1' };
    service.setCurrentStep(currentStep);
    expect(service.isFirstStep()).toBeTrue();
  });
});
