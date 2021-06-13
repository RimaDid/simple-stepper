import { slideInAnimation } from './../../shared/animation';
import { STEPS } from './../../services/steps.service';
import { Component, OnInit, Input, ViewEncapsulation, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { StepsService } from 'src/app/services/steps.service';
import { StepModel } from '../../models/step.model';

@Component({
  selector: 'app-steps-template',
  templateUrl: './steps-template.component.html',
  styleUrls: ['./steps-template.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class StepsTemplateComponent implements OnInit, OnDestroy {
  public steps: Observable<StepModel[] | null>;
  public currentStep: Observable<StepModel | null>;
  public canGoBack: boolean = false;
  public isLast: boolean = false;
  public isFirst: boolean = false;
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  constructor(
    private stepsService: StepsService,
    private router: Router, private route: ActivatedRoute) {
      // intialize variables
    this.currentStep = this.stepsService.currentStep;
    this.steps = this.stepsService.steps;
    this.isFirst = this.stepsService.isFirstStep();
    this.isLast = this.stepsService.isLastStep();

    //listen to the active route to set the current step
    this.router.events.pipe(
      takeUntil(this.destroyed$),
      filter((event)=> event instanceof NavigationEnd)
    )
    .subscribe(()=>{
      const url = this.route.snapshot.firstChild?.url;
      if(!url || url.length === 0) {
        return;
      }
      const activeStep = STEPS.find((step) => step.routerLink === url[0].path);
      if (activeStep) {
        this.stepsService.setCurrentStep(activeStep);
      }
    });
  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
  prepareRoute(outlet: RouterOutlet) {
    console.log('!!!!!!!',outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation)
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  // onBubbleStepClick(step: StepModel) {
  //   this.stepsService.setCurrentStep(step);
  //   this.router.navigate([`../${step.routerLink}`]);
  // }

}

