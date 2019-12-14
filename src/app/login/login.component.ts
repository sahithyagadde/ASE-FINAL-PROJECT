import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {HttpService} from '../http.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {





  public profMail;
  public regPassword;
  public loggedUser: string;

  constructor(private router: Router, private httpService: HttpService) { }

  ngOnInit() {
  }
  custLogin(user) {
    if (this.profMail === undefined || this.regPassword === undefined) {
      // base_pages_login.js - validation code
      alert('Please enter username or password');
    } else{
      this.httpService.getProfDetails(user).subscribe(data => {
        console.log(data);

        this.loggedUser = data.profName;
            this.router.navigate(['/professor']);

      });
      console.log(this.profMail, this.regPassword);
    }
  }
}


