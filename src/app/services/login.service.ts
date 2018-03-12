import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constants} from '../comman/constant';
import {Observable} from 'rxjs/Observable';
import {UserModel} from '../model/user.model';

@Injectable()
export class LoginService {

  constructor(private httpClient: HttpClient) {
  }

  public login(user: UserModel): Observable<any> {
    return this.httpClient.post(Constants.WEB_URL + 'api/auth/login', user);
  }


}
