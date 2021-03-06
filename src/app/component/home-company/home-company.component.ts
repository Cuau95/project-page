import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyStudentEventRelationServiceService } from 'src/app/services/company-student-event-relation-service.service';
import { CompanyHomeTable } from 'src/app/model/company-home-table';

@Component({
  selector: 'app-home-company',
  templateUrl: './home-company.component.html',
  styleUrls: ['./home-company.component.scss']
})
export class HomeCompanyComponent implements OnInit {

  idUser: string;
  name: string;
  dataSource;
  displayedColumns: string[] = ['student', 'campus', 'career', 'event', 'date'];

  constructor(private route: ActivatedRoute,
    private relationService: CompanyStudentEventRelationServiceService,
    private router: Router) {
    this.route.queryParams.subscribe(params => {
      this.idUser = params['idUser'];
    })
  }

  ngOnInit() {
    let relationTable: CompanyHomeTable = new CompanyHomeTable();
    let relations: CompanyHomeTable[] = new Array();
    this.relationService.getRelationByCompany(this.idUser).subscribe((res) => {
      res.forEach(relation => {
        this.name = relation.empresa.nombreEmpresa;
        relationTable.idStudent = relation.alumno.id;
        relationTable.student = relation.alumno.nombreCompleto;
        relationTable.campus = relation.alumno.campus.nombreEscuela;
        relationTable.career = relation.alumno.career.nombreCarrera;
        relationTable.event = relation.feriaEmpleo.nombreFeria;
        relationTable.date = relation.fecha;
        relations.push(relationTable);
      });
      this.dataSource = relations;
      console.log(this.dataSource);
    });
  }

  public goToEventList() {
    this.router.navigate(['/event-list'], { queryParams: { idUser: this.idUser } });
  }

  public goToEditProfile() {
    this.router.navigate(['/edit-company-profile'], { queryParams: { idUser: this.idUser } })
  }

}

