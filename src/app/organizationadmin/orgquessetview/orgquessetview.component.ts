import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpService} from '../../http.service';
import {NavigationEnd} from '@angular/router';
import { Observable } from 'rxjs';

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';


import {FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-orgquessetview',
  templateUrl: './orgquessetview.component.html',
  styleUrls: ['./orgquessetview.component.scss']
})
export class OrgquessetviewComponent implements OnInit {
  public loggedUser1: any;
  public pushRightClass: string;
  public showMenu: string;
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.Handset
  )
  quesset: {

    quessetName: any;
    ques1: any;
    ques2: any;
    ques3: any;
    ques4: any;
    ques5: any;
    deptname: any;
    date: any;
    _id: '/orgquessetedit';
  };

  constructor(private router: ActivatedRoute, private httpService: HttpService, private formBuilder: FormBuilder, private route: Router, private breakpointObserver: BreakpointObserver) {
    this.route.events.subscribe(val => {
      if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
        this.toggleSidebar();
      }
    });
  }

  ngOnInit() {
    this.getQuessetDetails(this.router.snapshot.params['id']);
    this.pushRightClass = 'push-right';
    this.showMenu = '';
    this.httpService.currentUser1().subscribe(res => {
      this.loggedUser1= res.orgName ;
      console.log(res.orgName);
      console.log('logged user', this.loggedUser1);
    }, (err) => {
      console.log(err);
    });

  }
  getQuessetDetails(id) {
    console.log('abc');
    console.log(id);
    this.httpService.getQuesset(id)
      .subscribe(data => {
        console.log(data);
        this.quesset = data;
      });
  }

  deleteQuessetDetails(id) {
    this.httpService.deleteQuestset(id)
      .subscribe(res => {
          this.route.navigate(['/organizationadminquest']);
        }, (err) => {
          console.log(err);
        }
      );
  }
  isToggled(): boolean {
    const dom: Element = document.querySelector('body');
    return dom.classList.contains(this.pushRightClass);
  }

  toggleSidebar() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle(this.pushRightClass);
  }

  logOut() {
    const res = this.httpService.logOutUser();
    if(res == null) {
      this.route.navigate(['/loginpage']);
    }
  }
  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }


}



