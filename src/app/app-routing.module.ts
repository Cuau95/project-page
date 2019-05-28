import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login/login.component';
import { HomeCompanyComponent } from './component/home-company/home-company.component';
import { HomeStudentComponent } from './component/home-student/home-student.component';
import { EventListComponent } from './component/event-list/event-list.component';
import { ContactStudentComponent } from './component/home-student/contact-student/contact-student.component';
import { LinkerStudentNfcComponent } from './component/linker-student-nfc/linker-student-nfc.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home-company', component: HomeCompanyComponent },
  { path: 'home-student', component: HomeStudentComponent },
  { path: 'event-list', component: EventListComponent },
  { path: 'contact-student', component: ContactStudentComponent },
  { path: 'linker-student-nfc', component: LinkerStudentNfcComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
