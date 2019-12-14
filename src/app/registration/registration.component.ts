import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public profId;
  public profName;
  public profMail;
  public orgName1;
  public orgAddr1;
  public profPhnum;
  public regPassword;
  public regPassword2;



  constructor(private router: Router, private httpService: HttpService) { }

  ngOnInit() {
  }


regisProf(user1: any) {
  if ( this.regPassword === undefined || this.regPassword2 === undefined) {
    alert('Please Enter all details');
  } else if (this.regPassword.length < 5) {
    alert('Password length should be greater than 5');
  } else if (this.regPassword !== this.regPassword2) {
    alert('Password does not match');
  } else {


    this.httpService.registerProf(user1);
    alert('Successful Registration');
    this.router.navigate(['/login']);

  }
}


}
