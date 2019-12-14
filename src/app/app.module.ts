import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { LoginpageComponent } from './loginpage/loginpage.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotpasswdComponent } from './forgotpasswd/forgotpasswd.component';
import { ProfessorComponent } from './professor/professor.component';
import { GlobadminComponent } from './globadmin/globadmin.component';

import {HttpService} from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { Routes } from '@angular/router';
import {
  MatFormFieldModule,
  MatPaginatorModule,
  MatTableModule,
  MatInputModule,
  MatCardModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatTooltipModule, _MatMenuDirectivesModule, MatToolbarModule, MatMenuModule, MatListModule, MatSidenavModule


} from '@angular/material';

import {MatIconModule} from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { GlobaladminaddComponent } from './globadmin/globaladminadd/globaladminadd.component';
import { GlobaladminviewComponent } from './globadmin/globaladminview/globaladminview.component';
import { GlobaladmineditComponent } from './globadmin/globaladminedit/globaladminedit.component';

import { OrganizationadminComponent } from './organizationadmin/organizationadmin.component';
import { OrganizationadminquestComponent } from './organizationadmin/organizationadminquest/organizationadminquest.component';
import { OrgquessetaddComponent } from './organizationadmin/orgquessetadd/orgquessetadd.component';
import { OrgquessetviewComponent } from './organizationadmin/orgquessetview/orgquessetview.component';
import { OrgquesseteditComponent } from './organizationadmin/orgquessetedit/orgquessetedit.component';
import { OrgprofaddComponent } from './organizationadmin/orgprofadd/orgprofadd.component';
import { OrgprofeditComponent } from './organizationadmin/orgprofedit/orgprofedit.component';
import { OrgprofviewComponent } from './organizationadmin/orgprofview/orgprofview.component';
import { OrgprofComponent } from './organizationadmin/orgprof/orgprof.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegistrationpageComponent } from './registrationpage/registrationpage.component';
import { LoginComponent } from './login/login.component';
import {MatCheckboxModule} from '@angular/material';
import { UserprofileComponent } from './organizationadmin/userprofile/userprofile.component';
import {OverlayModule} from '@angular/cdk/overlay';





const appRoutes: Routes = [
  {
    path: 'registration',
    component: RegistrationComponent,
    data: { title: 'Registration' }
  },
  {
    path: 'loginpage',
    component: LoginpageComponent,
    data: { title: 'Login Page' }
  },
  {
    path: 'globaladmin',
    component: GlobadminComponent,
    data: { title: 'Global Admin' }
  },
  {
    path: '/globaladminadd',
    component: GlobaladminaddComponent,
    data: { title: 'Global Admin Add' }
  },
  {
    path: '/globaladminedit/:id',
    component: GlobaladmineditComponent,
    data: { title: 'Global Admin Edit' }
  },
  {
    path: 'globaladminview/:id',
    component: GlobaladminviewComponent,
    data: { title: 'Global Admin View' }
  },
  {
    path: 'organizationadmin',
    component: OrganizationadminComponent,
    data: { title: 'Global Admin View' }
  },
  {
    path: 'orgquessetadd',
    component: OrgquessetaddComponent,
    data: { title: 'Global Admin View' }
  },
  {
    path: 'orgquessetedit/:id',
    component: OrgquesseteditComponent,
    data: { title: 'Global Admin View' }
  },
  {
    path: 'orgquessetview/:id',
    component: OrgquessetviewComponent,
    data: { title: 'Global Admin View' }
  },
  {
    path: 'orgprofview/:id',
    component: OrgprofviewComponent,
    data: { title: 'Organization Professor View' }
  },
  {
    path: 'orgprofedit/:id',
    component: OrgprofeditComponent,
    data: { title: 'Organization Professor Edit' }
  },
  {
    path: 'orgprofadd',
    component: OrgprofaddComponent,
    data: { title: 'Organization Professor Add' }
  },
  {
    path: 'orgprof',
    component: OrgprofComponent,
    data: { title: 'Organization Professor' }
  }


];

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    RegistrationComponent,
    ForgotpasswdComponent,
    ProfessorComponent,
    GlobadminComponent,

    GlobaladminaddComponent,
    GlobaladminviewComponent,
    GlobaladmineditComponent,

    OrganizationadminComponent,
    OrganizationadminquestComponent,
    OrgquessetaddComponent,
    OrgquessetviewComponent,
    OrgquesseteditComponent,
    OrgprofaddComponent,
    OrgprofeditComponent,
    OrgprofviewComponent,
    OrgprofComponent,
    HomepageComponent,
    RegistrationpageComponent,
    LoginComponent,
    UserprofileComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatCheckboxModule,
    _MatMenuDirectivesModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatSidenavModule,

    OverlayModule

  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
