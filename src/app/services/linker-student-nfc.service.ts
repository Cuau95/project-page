import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentNfcRelation } from '../model/student-nfc-relation';

@Injectable({
  providedIn: 'root'
})
export class LinkerStudentNfcService {

  constructor(private httpClient: HttpClient) { }

  public linkStudentAndNFC(idStudent: string) {
    try{
      let apiURL: string = 'http://localhost:8086/student-nfc-relation/student/id/' + idStudent;
      return this.httpClient.post<StudentNfcRelation>(apiURL, {});
    } catch(ex){
      return null;
    }
  }

  public fetchAllRelations() {
    let apiURL: string = 'localhost:8086/student-nfc-relation/relation';
    return this.httpClient.get<StudentNfcRelation[]>(apiURL);
  }

}
