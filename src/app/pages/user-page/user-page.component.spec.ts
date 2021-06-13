import { UserService } from './../../services/user.service';
import { User } from './../../models/user.model';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormUtilityService } from 'src/app/services/form-utility.service';

import { UserPageComponent } from './user-page.component';
import { Observable, of } from 'rxjs';
class FormUtilityServiceMock {
  getUser(): User { return new User({userName: 'test'})};
}
class UserServiceMock {
  getUserByUserName(userName: string): Observable<any> { return of({userName})}
}
describe('CompletePageComponent', () => {
  let component: UserPageComponent;
  let fixture: ComponentFixture<UserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPageComponent ],
      providers: [
        {provide: FormUtilityService, useClass: FormUtilityServiceMock},
        {provide: UserService, useClass: UserServiceMock},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
