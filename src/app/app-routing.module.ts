import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {LoginpageComponent} from './loginpage/loginpage.component';
import {RegistrationComponent} from './registration/registration.component';
import {ForgotpasswdComponent} from './forgotpasswd/forgotpasswd.component';
import {GlobadminComponent} from './globadmin/globadmin.component';

import {ProfessorComponent} from './professor/professor.component';
import {GlobaladminaddComponent} from './globadmin/globaladminadd/globaladminadd.component';
import {GlobaladmineditComponent} from './globadmin/globaladminedit/globaladminedit.component';
import {GlobaladminviewComponent} from './globadmin/globaladminview/globaladminview.component';
import {OrganizationadminquestComponent} from './organizationadmin/organizationadminquest/organizationadminquest.component';
import {OrgquessetaddComponent} from './organizationadmin/orgquessetadd/orgquessetadd.component';
import {OrgquesseteditComponent} from './organizationadmin/orgquessetedit/orgquessetedit.component';
import {OrgquessetviewComponent} from './organizationadmin/orgquessetview/orgquessetview.component';
import {OrganizationadminComponent} from './organizationadmin/organizationadmin.component';
import {OrgprofaddComponent} from './organizationadmin/orgprofadd/orgprofadd.component';
import {OrgprofviewComponent} from './organizationadmin/orgprofview/orgprofview.component';
import {OrgprofeditComponent} from './organizationadmin/orgprofedit/orgprofedit.component';
import {OrgprofComponent} from './organizationadmin/orgprof/orgprof.component';
import {HomepageComponent} from './homepage/homepage.component';
import {RegistrationpageComponent} from './registrationpage/registrationpage.component';
import {LoginComponent} from './login/login.component';
import {UserprofileComponent} from './organizationadmin/userprofile/userprofile.component';
const routes: Routes = [
  {path: '', redirectTo: '/homepage', pathMatch: 'full'},
  {path: 'homepage', component: HomepageComponent},
  {path: 'loginpage', component: LoginpageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'registrationpage', component: RegistrationpageComponent},
  {path: 'forgotpasswd', component: ForgotpasswdComponent},
  {path: 'globadmin', component: GlobadminComponent},
  {path: 'userprofile', component: UserprofileComponent},

  {path: 'professor', component: ProfessorComponent},
{path: 'globaladminadd', component: GlobaladminaddComponent},
{path: 'globaladminview/:id', component: GlobaladminviewComponent},
{path: 'globaladminedit/:id', component: GlobaladmineditComponent},
  {path: 'organizationadminquest', component: OrganizationadminquestComponent},
  {path: 'organizationadmin', component: OrganizationadminComponent},
  {path: 'orgquessetadd', component: OrgquessetaddComponent},
  {path: 'orgprofadd', component: OrgprofaddComponent},
  {path: 'orgquessetedit/:id', component: OrgquesseteditComponent},
  {path: 'orgquessetview/:id', component: OrgquessetviewComponent},
  {path: 'orgprofview/:id', component: OrgprofviewComponent},
  {path: 'orgprofadd', component: OrgprofaddComponent},
  {path: 'orgprofedit/:id', component: OrgprofeditComponent},
  {path: 'orgprof', component: OrgprofComponent}
];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
