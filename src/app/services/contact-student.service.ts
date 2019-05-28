import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactStudent } from '../model/contact-student';


@Injectable({
  providedIn: 'root'
})
export class ContactStudentService {

  constructor(private httpClient: HttpClient) { }

  public fetchContactStudentRecords(idStudent: string) {
    let apiURL: string = 'http://localhost:8085/student/contacto/boleta/' + idStudent;
    return this.httpClient.get<ContactStudent>(apiURL);
  } 

}
