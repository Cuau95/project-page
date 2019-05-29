import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { CompanyProfile } from 'src/app/model/company-profile';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss']
})
export class CompanyProfileComponent implements OnInit {

  idUser: string;
  user: CompanyProfile = new CompanyProfile();
  message: string;

  constructor(private service: CompanyService,
    private router: Router,
    private route: ActivatedRoute) {
      this.route.queryParams.subscribe(params => {
        this.idUser = params['idUser'];
      })
    }

  ngOnInit() {
    this.service.fetchCompanyById(this.idUser).subscribe((res) => {
      this.user = res;
    });
  }

  updateCompany() {
    this.service.updateCompany(this.idUser, this.user).subscribe((res) => {
      this.message = 'Actualizado con exito!';
    });
  }

  backToHomeCompany() {
    this.router.navigate(['/home-company'], { queryParams: { idUser: this.idUser } });
  }

}
