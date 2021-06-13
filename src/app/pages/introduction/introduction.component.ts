import { Component } from '@angular/core';
import { FormUtilityService } from '../../services/form-utility.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent  {

  constructor(private utility: FormUtilityService) { }
  goNext(){
    this.utility.goToStep('personal-info');
  }
}
