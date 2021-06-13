import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormUtilityService } from 'src/app/services/form-utility.service';

import { IntroductionComponent } from './introduction.component';
class FormUtilityServiceMock {
  goToStep(): void {};
}
describe('IntroductionComponent', () => {
  let component: IntroductionComponent;
  let fixture: ComponentFixture<IntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroductionComponent ],
      providers: [{provide: FormUtilityService, useClass: FormUtilityServiceMock}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
