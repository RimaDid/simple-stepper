import { StepDirection } from './../../models/step.model';
import { FormUtilityService } from '../../services/form-utility.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {

  public personalInformationsForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    userName: new FormControl('', Validators.required)
  });
  get firstName() { return this.personalInformationsForm.get('firstName'); }
  get lastName() { return this.personalInformationsForm.get('lastName'); }
  get userName() { return this.personalInformationsForm.get('userName'); }

  constructor(private utility: FormUtilityService) { }

  ngOnInit(): void {
    this.utility.populateForm(this.personalInformationsForm);
  }


  onSubmit() {
    if (!this.personalInformationsForm.valid) {
      return;
    }
    this.utility.collectFormParts(this.personalInformationsForm.value);
    this.utility.goToStep('consent');
  }

  goBack() {
    this.utility.setCachedForm(this.personalInformationsForm.value)
    this.utility.goToStep('intro', StepDirection.prev);
  }
}
