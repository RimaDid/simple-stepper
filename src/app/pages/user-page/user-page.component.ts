import { Component, OnInit } from '@angular/core';
import { FormUtilityService } from './../../services/form-utility.service';
import { User } from './../../models/user.model';
import { UserService } from './../../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  public userResponse: Observable<any> = new Observable();
  public user: User = new User();
  constructor(private userService: UserService, private utility: FormUtilityService) { }

  ngOnInit(): void {
    this.getUser();
  }

  private getUser() {
    this.user = history.state && history.state.user ? history.state.user : this.utility.getUser();
    this.userResponse = this.userService.getUserByUserName(this.user?.userName);
  }

}
