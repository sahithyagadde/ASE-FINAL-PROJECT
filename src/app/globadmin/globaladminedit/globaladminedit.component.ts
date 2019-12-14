import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
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
  selector: 'app-globaladminedit',
  templateUrl: './globaladminedit.component.html',
  styleUrls: ['./globaladminedit.component.scss']
})
export class GlobaladmineditComponent implements OnInit {

  org = {};
  OrgForm: FormGroup;

  matcher: any;
  public loggedUser1: any;
  public pushRightClass: string;
  public showMenu: string;
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.Handset
  );


  constructor(private router: Router, private route: ActivatedRoute, private httpService: HttpService, private formBuilder: FormBuilder, private breakpointObserver: BreakpointObserver) {
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
        this.toggleSidebar();
      }
    });
  }

  ngOnInit() {
    this.OrgForm = this.formBuilder.group({
      'orgId': [null, Validators.required],
      'orgName': [null, Validators.required],
      'orgMail': [null, Validators.required],
      'orgPhnum': [null, Validators.required],
      'orgAddr': [null, Validators.required]

    });
    this.getOrganization(this.route.snapshot.params['id']);
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

  getOrganizationDetails(id) {
    console.log('abc');
    console.log(id);
    this.httpService.getOrganization(id)
      .subscribe(data => {
        console.log(data);
        this.org = data;
      });
  }

  onFormSubmit(form: NgForm) {
    let id = this.route.snapshot.params['id'];
    console.log(form)
    this.httpService.updateOrganization(id, form)
      .subscribe(res => {
        this.router.navigate(['/globaladminview', id]);
      }, (err) => {
        console.log(err);
      });
  }

  getOrganization(id) {
    this.httpService.getOrganization(id).subscribe(data => {
      id = data._id;
      this.OrgForm.setValue({
        orgId: data.orgId,
        orgName: data.orgName,
        orgMail: data.orgMail,
        orgPhnum: data.orgPhnum,
        orgAddr: data.orgAddr

      });
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
