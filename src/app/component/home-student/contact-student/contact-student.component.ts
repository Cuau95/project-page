import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactStudentService } from 'src/app/services/contact-student.service';

@Component({
  selector: 'app-contact-student',
  templateUrl: './contact-student.component.html',
  styleUrls: ['./contact-student.component.scss']
})
export class ContactStudentComponent implements OnInit {

  idUser: string;
  student: string;
  studentName: string;
  dataSource;
  displayedColumns: string[] =
   ['adressStudent', 'neighborhood', 'delegacion', 'emailStudent', 'numberPhone'];

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactStudentService,
    private router: Router ) {
    this.route.queryParams.subscribe(params => {
      this.idUser = params['idUser'];
      this.student = params['student'];
      this.studentName = params['studentName'];
    })
   }

  ngOnInit() {
    this.contactService.fetchContactStudentRecords(this.student).subscribe((res) => {
      this.dataSource = res;
    });
  }

  backToCompanyHome() {
    this.router.navigate(['//home-company'], { queryParams: { idUser: this.idUser } })
  }

}
