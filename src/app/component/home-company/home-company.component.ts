import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyStudentEventRelationServiceService } from 'src/app/services/company-student-event-relation-service.service';
import { CompanyHomeTable } from 'src/app/model/company-home-table';

@Component({
  selector: 'app-home-company',
  templateUrl: './home-company.component.html',
  styleUrls: ['./home-company.component.scss']
})
export class HomeCompanyComponent implements OnInit {

  idUser: string;
  dataSource;
  displayedColumns: string[] = ['student', 'campus', 'career', 'event', 'date'];

  constructor(private route: ActivatedRoute,
    private relationService: CompanyStudentEventRelationServiceService) {
    this.route.queryParams.subscribe(params => {
      this.idUser = params['idUser'];
    })
  }

  ngOnInit() {
    let relationTable: CompanyHomeTable = new CompanyHomeTable();
    let relations: CompanyHomeTable[] = new Array();
    this.relationService.getRelationByCompany(this.idUser).subscribe((res) => {
      res.forEach(relation => {
        relationTable.student = relation.alumno.nombreCompleto;
        relationTable.campus = relation.alumno.campus.nombreEscuela;
        relationTable.career = relation.alumno.career.nombreCarrera;
        relationTable.event = relation.feriaEmpleo.nombreFeria;
        relationTable.date = relation.fecha;
        relations.push(relationTable);
      });
      this.dataSource = relations;
    });
  }
}

