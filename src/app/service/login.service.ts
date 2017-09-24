import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginService {
  isLoggedIn: boolean =  false;
  apiLoginUrl: string = '/api/api-token-auth/';

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<any> {
    const body = {
      username: username,
      password: password
    };
    return this.http.post(this.apiLoginUrl, body);
  }

}
