import {ActivatedRoute, Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../http.service';
import {OrgDataSource} from '../../globadmin/globadmin.component';
import {FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';

import {DataSource} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material/paginator';
import {animate, state, style, transition, trigger} from '@angular/animations';


import {NavigationEnd} from '@angular/router';
import { Observable } from 'rxjs';

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-globaladminview',
  templateUrl: './globaladminview.component.html',
  styleUrls: ['./globaladminview.component.scss']
})
export class GlobaladminviewComponent implements OnInit {

  org: {

    orgAddr: any;
    orgPhnum: any;
    orgMail: any;
    orgName: any;
    orgId: any;
    _id: '/globaladminedit';
  };
  public loggedUser1: any;
  public pushRightClass: string;
  public showMenu: string;
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.Handset
  );


  constructor(private router: ActivatedRoute, private httpService: HttpService, private formBuilder: FormBuilder, private route: Router, private breakpointObserver: BreakpointObserver) {
    this.route.events.subscribe(val => {
      if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
        this.toggleSidebar();
      }
    });
  }

  ngOnInit() {
    this.getOrganizationDetails(this.router.snapshot.params['id']);
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


  getOrganizationDetails(id) {
    console.log('abc');
    console.log(id);
    this.httpService.getOrganization(id)
      .subscribe(data => {
        console.log(data);
        this.org = data;
      });
  }

  deleteOrganizationDetails(id) {
    this.httpService.deleteOrganization(id)
      .subscribe(res => {
          this.route.navigate(['/globadmin']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
