import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpService} from '../../http.service';



import { NavigationEnd} from '@angular/router';

import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {DataSource} from '@angular/cdk/collections';


@Component({
  selector: 'app-orgprof',
  templateUrl: './orgprof.component.html',
  styleUrls: ['./orgprof.component.scss']
})
export class OrgprofComponent implements OnInit {

  public profId;
  public profName;
  public profMail;
  matcher: any;
  public loggedUser1: any;
  public pushRightClass: string;
  public showMenu: string;
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.Handset
  )



  constructor(private httpService: HttpService, private router: Router, private formBuilder: FormBuilder, private breakpointObserver: BreakpointObserver) {
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
        this.toggleSidebar();
      }
    });
  }

  prof: any;
  displayedColumns = ['profId', 'profName', 'profMail'];
  dataSource: OrgDataSource = new OrgDataSource(this.httpService);


  ngOnInit() {
    this.pushRightClass = 'push-right';
    this.showMenu = '';
    this.httpService.currentUser1().subscribe(res => {
      this.loggedUser1= res.orgName ;
      console.log(res.orgName);
      console.log('logged user', this.loggedUser1);
    }, (err) => {
      console.log(err);
    });

    this.httpService.getProfessorDetails()
      .subscribe(res => {
        console.log(res);
        this.prof = res;
      }, err => {
        console.log(err);
      });
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
      this.router.navigate(['/loginpage']);
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

export class OrgDataSource extends DataSource<any> {
  constructor(private httpService: HttpService) {
    super();
  }

  connect() {
    return this.httpService.getProfessorDetails();
  }

  disconnect() {

  }

}
