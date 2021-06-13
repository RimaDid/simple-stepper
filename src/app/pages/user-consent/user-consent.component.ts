import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormUtilityService } from '../../services/form-utility.service';
import { StepDirection } from './../../models/step.model';

@Component({
  selector: 'app-user-consent',
  templateUrl: './user-consent.component.html',
  styleUrls: ['./user-consent.component.scss']
})
export class UserConsentComponent implements OnInit {
  public consentForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    consent: new FormControl('', Validators.requiredTrue),
  });
  constructor(private utility: FormUtilityService) { }

  ngOnInit(): void {
    this.utility.populateForm(this.consentForm);
  }
  get email() { return this.consentForm.get('email'); }
  get consent() { return this.consentForm.get('consent'); }

  onSubmit() {
    if (!this.consentForm.valid) {
      return;
    }
    this.utility.collectFormParts(this.consentForm.value);
    this.utility.goToStep('user', StepDirection.end);
  }

  goBack() {
    this.utility.setCachedForm(this.consentForm.value);
    this.utility.goToStep('personal-info', StepDirection.prev);
  }
}
