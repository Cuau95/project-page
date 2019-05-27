import { Component, OnInit } from '@angular/core';
import { CompanyStudentEventRelationServiceService } from 'src/app/services/company-student-event-relation-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-student',
  templateUrl: './home-student.component.html',
  styleUrls: ['./home-student.component.scss']
})
export class HomeStudentComponent implements OnInit {

  idUser: string;
  dataSource;
  displayedColumns: string[] = ['company', 'emailCompany', 'event', 'date'];

  constructor(private route: ActivatedRoute,
    private relationService: CompanyStudentEventRelationServiceService) {
    this.route.queryParams.subscribe(params => {
      this.idUser = params['idUser'];
    })
  }

  ngOnInit() {
  }

}
