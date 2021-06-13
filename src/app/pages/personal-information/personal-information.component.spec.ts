import { FormUtilityService } from './../../services/form-utility.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInformationComponent } from './personal-information.component';
class FormUtilityServiceMock {
  goToStep(): void {};
  collectFormParts(): void {};
  populateForm(): void {};
}
describe('PersonalInformationComponent', () => {
  let component: PersonalInformationComponent;
  let fixture: ComponentFixture<PersonalInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalInformationComponent ],
      providers: [{provide: FormUtilityService, useClass: FormUtilityServiceMock}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
