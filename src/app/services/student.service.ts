import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentProfile } from '../model/student-profile';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  public fetchStudentById(idCompany: string) {
    let apiURL: string = 'http://localhost:8085/student/boleta/' + idCompany;
    return this.httpClient.get<StudentProfile>(apiURL);
  }

  public updateStudent(idCompany: string, updatedStudent: StudentProfile) {
    let apiURL: string = 'http://localhost:8085/student/id/' + idCompany;
    return this.httpClient.post<StudentProfile>(apiURL, updatedStudent);
  }

}
