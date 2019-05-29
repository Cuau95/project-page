import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login/login.component';
import { HomeCompanyComponent } from './component/home-company/home-company.component';
import { HomeStudentComponent } from './component/home-student/home-student.component';
import { EventListComponent } from './component/event-list/event-list.component';
import { ContactStudentComponent } from './component/home-student/contact-student/contact-student.component';
import { LinkerStudentNfcComponent } from './component/linker-student-nfc/linker-student-nfc.component';
import { StudentNfcRelationComponent } from './component/student-nfc-relation/student-nfc-relation.component';
import { CompanyProfileComponent } from './component/company-profile/company-profile.component';
import { StudentProfileComponent } from './component/student-profile/student-profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home-company', component: HomeCompanyComponent },
  { path: 'home-student', component: HomeStudentComponent },
  { path: 'event-list', component: EventListComponent },
  { path: 'contact-student', component: ContactStudentComponent },
  { path: 'linker-student-nfc', component: LinkerStudentNfcComponent },
  { path: 'relation-student-nfc', component: StudentNfcRelationComponent },
  { path: 'edit-company-profile', component: CompanyProfileComponent },
  { path: 'edit-student-profile', component: StudentProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
