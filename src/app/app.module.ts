import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ɵRender3NgModuleRef } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login/login.component';
import { MyNavComponent } from './component/nav-bar/my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule, MatTableModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeCompanyComponent } from './component/home-company/home-company.component';
import { HomeStudentComponent } from './component/home-student/home-student.component';
import { EventListComponent } from './component/event-list/event-list.component';
import { CompanyProfileComponent } from './component/company-profile/company-profile.component';
import { StudentProfileComponent } from './component/student-profile/student-profile.component';
import { ContactStudentComponent } from './component/home-student/contact-student/contact-student.component';
import { LinkerStudentNfcComponent } from './component/linker-student-nfc/linker-student-nfc.component';
import { StudentNfcRelationComponent } from './component/student-nfc-relation/student-nfc-relation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MyNavComponent,
    HomeCompanyComponent,
    HomeStudentComponent,
    EventListComponent,
    CompanyProfileComponent,
    StudentProfileComponent,
    ContactStudentComponent,
    LinkerStudentNfcComponent,
    StudentNfcRelationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatTableModule
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatTableModule
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
