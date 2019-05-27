import { Injectable } from '@angular/core';
import { CompanyStudentEventRelation } from '../model/company-student-event-relation';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyStudentEventRelationServiceService {

  constructor(private httpClient: HttpClient) { }

  public getRelationByCompany(idCompany: string) {
    let apiURL = 'http://localhost:8080/student-company-event-relation/company/' + idCompany;
    return this.httpClient.get<CompanyStudentEventRelation[]>(apiURL);
  }

}
