import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private serviceLogin: LoginServiceService, private router: Router ) { }

  private user: string;
  private password: string;

  ngOnInit() { }

  checkPassword() {
    if(this.user.startsWith('USU')){
      this.serviceLogin.passwordCheckStudent(this.user, this.password).subscribe((res) => {
        if(res.passwordResponse === 'pass'){
          this.router.navigate(['/home-student'], { queryParams: { idUser: this.user } })
        }
      });
    } else {
      if(this.user.startsWith('EMP')){
        this.serviceLogin.passwordCheckCompany(this.user, this.password).subscribe((res) => {
          if(res.passwordResponse === 'pass'){
            this.router.navigate(['/home-company'], { queryParams: { idUser: this.user } })
          }
        });
      } else {

      }
    }
  }

}
