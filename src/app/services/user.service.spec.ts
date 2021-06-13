import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable<User>', () => {
    const dummyUser = {
        name: 'John',
        email: 'test@test.com', 
      };

    service.getUserByUserName('John').subscribe((user) => {
      expect(user).toEqual(dummyUser);
    });

    const req = httpMock.expectOne(`${service.baseRef}/users/John`);
    expect(req.request.method).toBe("GET");
    req.flush(dummyUser);
  });
  it('should throw an error if username is empty', () => {

    service.getUserByUserName('').subscribe(() => {}, 
    (err) =>expect(err).toBe('Bad request: you cannot use empty string as a username!'));

    const req = httpMock.expectNone(`${service.baseRef}/users/`);
  });
});
