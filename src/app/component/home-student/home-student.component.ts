import { Component, OnInit } from '@angular/core';
import { CompanyStudentEventRelationServiceService } from 'src/app/services/company-student-event-relation-service.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  displayedColumns: string[] = ['company', 'emailCompany', 'numberPhone', 'event', 'date'];

  constructor(private route: ActivatedRoute,
    private relationService: CompanyStudentEventRelationServiceService,
    private router: Router
    ) {
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
        relationTable.companyPhone = relation.empresa.telefono;
        relations.push(relationTable);
      });
      this.dataSource = relations;
    });
  }

  public goToEventList() {
    this.router.navigate(['/event-list'], { queryParams: { idUser: this.idUser } });
  }

}
