
import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {HttpService} from '../http.service';
import {DataSource} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material/paginator';
import {animate, state, style, transition, trigger} from '@angular/animations';


import {NavigationEnd} from '@angular/router';
import { Observable } from 'rxjs';

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';



@Component({
  selector: 'app-globadmin',
  templateUrl: './globadmin.component.html',
  styleUrls: ['./globadmin.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class GlobadminComponent implements OnInit {
  public orgName;
  public orgId;
  public orgAddr;
  public orgMail;
  public orgPhnum;
  public loggedUser1: any;
  public pushRightClass: string;
  public showMenu: string;
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.Handset
  )


  constructor(private httpService: HttpService, private router: Router, private breakpointObserver: BreakpointObserver ) {

  }

  Organizations: any;
  displayedColumns = ['orgId', 'orgName', 'orgMail', 'orgPhnum', 'orgAddr'];
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

    this.httpService.getOrganizations()
      .subscribe(res => {
        console.log(res);
        this.Organizations = res;
      }, err => {
        console.log(err);
      });
  }


  logOut() {
    const res = this.httpService.logOutUser();
    if(res == null) {
      this.router.navigate(['/loginpage']);
    }
  }



}

export class OrgDataSource extends DataSource<any> {
  constructor(private httpService: HttpService) {
    super();
  }

  connect() {
    return this.httpService.getOrganizations();
  }

  disconnect() {

  }



}


