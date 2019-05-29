import { Component, OnInit } from '@angular/core';
import { StudentProfile } from 'src/app/model/student-profile';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { ContactStudent } from 'src/app/model/contact-student';
import { ContactStudentService } from 'src/app/services/contact-student.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit {

  idUser: string;
  user: StudentProfile = new StudentProfile();
  userContact: ContactStudent = new ContactStudent();
  message: string;
  messageContact: string;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private service: StudentService,
    private serviceContact: ContactStudentService) {
    this.route.queryParams.subscribe(params => {
      this.idUser = params['idUser'];
    })
  }

  ngOnInit() {
    this.service.fetchStudentById(this.idUser).subscribe((res) => {
      this.user = res;
    });
    this.serviceContact.fetchContactStudentRecords(this.idUser).subscribe((res) => {
      this.userContact = res;
    });
  }

  updateStudent() {
    this.user.nombreCompleto = this.user.nombreAlumno + ' ' + this.user.pApellido + ' ' + this.user.mApellido;
    this.service.updateStudent(this.idUser, this.user).subscribe((res) => {
      this.message = 'Actualizado con Exito!';
    });
  }

  updateContactStudent() {
    this.serviceContact.updateContactStudent(this.idUser, this.userContact).subscribe((res) => {
      this.messageContact = 'Actualizado con Exito!';
    });
  }

  backToHomeStudent() {
    this.router.navigate(['/home-student'], { queryParams: { idUser: this.idUser } });
  }

}
