import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../http.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import { ViewChild} from '@angular/core';
import {NavigationEnd} from '@angular/router';
import { Observable } from 'rxjs';
import {MatSidenavContent} from '@angular/material';

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

import {DataSource} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material/paginator';
import {animate, state, style, transition, trigger} from '@angular/animations';
@Component({
  selector: 'app-organizationadminquest',
  templateUrl: './organizationadminquest.component.html',
  styleUrls: ['./organizationadminquest.component.scss']
})
export class OrganizationadminquestComponent implements OnInit {
  public deptname;
  public quessetName;

  public date;
  public loggedUser1: any;
  public pushRightClass: string;
  public showMenu: string;
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.Handset
  )

  constructor(private httpService: HttpService, private router: Router, private breakpointObserver: BreakpointObserver) {
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
        this.toggleSidebar();
      }
    });
  }

  quessets: any;
  displayedColumns = ['deptname', 'quessetName', 'date'];
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
    // document.getElementById('block2').style.display = 'none';
   // document.getElementById('block3').style.display = 'none';

   // document.getElementById('block5').style.display = 'none';
    this.httpService.getquessets()
      .subscribe(res => {
        console.log(res);
        this.quessets = res;
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
    return this.httpService.getquessets();
  }

  disconnect() {

  }

}

