import { Injectable } from '@angular/core';
import {UserModel} from '../model/user.model';
import {HttpClient} from '@angular/common/http';
import {Constants} from '../comman/constant';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private httpClient:HttpClient) { }

  public userRegistration(user:UserModel):Observable<any>  {
  return this.httpClient.post(Constants.WEB_URL+"user/registration", user)
  }

}
