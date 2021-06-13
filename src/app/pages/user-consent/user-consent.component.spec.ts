import { FormUtilityService } from './../../services/form-utility.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConsentComponent } from './user-consent.component';

class FormUtilityServiceMock {
  goToStep(): void {};
  collectFormParts(): void {};
  populateForm(): void {};
}
describe('UserConsentComponent', () => {
  let component: UserConsentComponent;
  let fixture: ComponentFixture<UserConsentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserConsentComponent ],
      providers: [{provide: FormUtilityService, useClass: FormUtilityServiceMock}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserConsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
