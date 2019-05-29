import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompanyProfile } from '../model/company-profile';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient: HttpClient) { }

  public fetchCompanyById(idCompany: string) {
    let apiURL: string = 'http://localhost:8082/company/id/' + idCompany;
    return this.httpClient.get<CompanyProfile>(apiURL);
  }

  public updateCompany(idCompany: string, updatedCompany: CompanyProfile) {
    let apiURL: string = 'http://localhost:8082/company/id/' + idCompany;
    return this.httpClient.post<CompanyProfile>(apiURL, updatedCompany);
  }

}
