import { Component, OnInit } from '@angular/core';
import { CompanyStudentEventRelationServiceService } from 'src/app/services/company-student-event-relation-service.service';
import { ActivatedRoute } from '@angular/router';
import { StudentHomeTable } from 'src/app/model/student-home-table';

@Component({
  selector: 'app-home-student',
  templateUrl: './home-student.component.html',
  styleUrls: ['./home-student.component.scss']
})
export class HomeStudentComponent implements OnInit {

  idUser: string;
  name: string;
  dataSource;
  displayedColumns: string[] = ['company', 'emailCompany', 'event', 'date'];

  constructor(private route: ActivatedRoute,
    private relationService: CompanyStudentEventRelationServiceService) {
    this.route.queryParams.subscribe(params => {
      this.idUser = params['idUser'];
    })
  }

  ngOnInit() {
    let relationTable: StudentHomeTable = new StudentHomeTable();
    let relations: StudentHomeTable[] = new Array();
    this.relationService.getRelationByStudentId(this.idUser).subscribe((res) => {
      res.forEach(relation => {
        this.name = relation.alumno.nombreAlumno;
        relationTable.company = relation.empresa.nombreEmpresa;
        relationTable.emailCompany = relation.empresa.correo;
        relationTable.event = relation.feriaEmpleo.nombreFeria;
        relationTable.date = relation.fecha;
        relations.push(relationTable);
      });
      this.dataSource = relations;
    });
  }

}
