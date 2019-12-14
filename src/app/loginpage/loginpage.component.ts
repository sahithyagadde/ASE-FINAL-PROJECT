import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
public orgMail;
public registerPassword;
public loggedUser;


  constructor(private router: Router, private httpService: HttpService) { }

  ngOnInit() {
  }
  custLogin(user) {
    if (this.orgMail === undefined || this.registerPassword === undefined) {
      // base_pages_login.js - validation code
      alert('Please enter username or password');
    } else if (this.orgMail === 'admin' && this.registerPassword === 'admin') {
      this.router.navigate(['/globadmin']);
    } else {
      this.httpService.getUserDetails(user).subscribe(data => {


          this.loggedUser = data.orgName;


          this.router.navigate(['/organizationadmin']);

        console.log(data.orgName);
        console.log(data.orgPhnum);
      });

      console.log(this.orgMail, this.registerPassword);
    }
    }
  }

