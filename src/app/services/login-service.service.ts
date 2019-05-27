import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PasswordResponse } from '../model/password-response';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private httpClient: HttpClient) { }

  public passwordCheckCompany(user: string, password: string) {
    let apiURL = 'http://localhost:8082/company/id/'+ user +'/password/' + password;
    return this.httpClient.get<PasswordResponse>(apiURL);
  }

  public passwordCheckStudent(user: string, password: string) {
    let apiURL = 'http://localhost:8085/student/usuario/'+ user +'/password/' + password;
    return this.httpClient.get<PasswordResponse>(apiURL);
  }
}
