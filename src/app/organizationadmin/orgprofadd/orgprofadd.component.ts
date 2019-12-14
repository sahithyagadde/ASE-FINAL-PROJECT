import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpService} from '../../http.service';
import {OrgDataSource} from '../../globadmin/globadmin.component';

import {ActivatedRoute, NavigationEnd} from '@angular/router';

import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-orgprofadd',
  templateUrl: './orgprofadd.component.html',
  styleUrls: ['./orgprofadd.component.scss']
})
export class OrgprofaddComponent implements OnInit {
  profForm: FormGroup;
  profId = '';
  profName = '';
  orgName1 = '';
  profMail = '';
  orgAddr1 = '';
  profPhnum = '';
  regPassword = '';
  matcher: any;
  dataSource: OrgDataSource = new OrgDataSource(this.httpService);
  public loggedUser1: any;
  public pushRightClass: string;
  public showMenu: string;
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.Handset
  )
  constructor(private router: Router, private httpService: HttpService, private formBuilder: FormBuilder, private breakpointObserver: BreakpointObserver) {
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
        this.toggleSidebar();
      }
    });
  }



  ngOnInit() {
    this.profForm = this.formBuilder.group({
      profId: [null, Validators.required],
      profName: [null, Validators.required],
      orgName1: [null, Validators.required],
      profMail: [null, Validators.required],
      orgAddr1: [null, Validators.required],
      profPhnum: [null, Validators.required],
      regPassword: [null, Validators.required]
    });
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
  onFormSubmit(form: NgForm) {
    this.httpService.addprof(form)
      .subscribe(res => {
        const id = res['_id'];
        console.log(id);

        this.router.navigate(['/orgprofview', id]);
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



