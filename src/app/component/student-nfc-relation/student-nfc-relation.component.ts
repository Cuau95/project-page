import { Component, OnInit } from '@angular/core';
import { LinkerStudentNfcService } from 'src/app/services/linker-student-nfc.service';

@Component({
  selector: 'app-student-nfc-relation',
  templateUrl: './student-nfc-relation.component.html',
  styleUrls: ['./student-nfc-relation.component.scss']
})
export class StudentNfcRelationComponent implements OnInit {

  dataSource;
  displayedColumns: string[] = ['idNFC', 'student'];

  constructor(private service: LinkerStudentNfcService) { }

  ngOnInit() {
    this.updateDataSource();
  }

  updateDataSource() {
    this.service.fetchAllRelations().subscribe((res) => {
      this.dataSource = res;
    });
  }

}
