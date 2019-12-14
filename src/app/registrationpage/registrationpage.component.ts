import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpService} from '../http.service';
@Component({
  selector: 'app-registrationpage',
  templateUrl: './registrationpage.component.html',
  styleUrls: ['./registrationpage.component.css']
})
export class RegistrationpageComponent implements OnInit {


  public userType;
  public orgId;
  public orgName;
  public orgMail;
  public orgAddr;
  public orgPhnum;
  public registerPassword;
  public registerPassword2;



  constructor(private router: Router, private httpService: HttpService) { }

  ngOnInit() {
  }

  regisUser(user: any) {

    // tslint:disable-next-line:max-line-length
    if ( this.registerPassword === undefined ||  this.registerPassword2 === undefined) {
      alert('Please Enter all details');
    }  else if (this.registerPassword.length < 5) {
      alert('Password length should be greater than 5');
    } else if (this.registerPassword !== this.registerPassword2) {
      alert('Password does not match');
    } else {

      this.httpService.registerOrgAdmin(user);
      alert('Successful Registration');
      this.router.navigate(['/loginpage']);

    }
  }




}
