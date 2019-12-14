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
  selector: 'app-globaladminadd',
  templateUrl: './globaladminadd.component.html',
  styleUrls: ['./globaladminadd.component.scss']
})
export class GlobaladminaddComponent implements OnInit {
  public loggedUser1: any;
  public pushRightClass: string;
  public showMenu: string;
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.Handset
  )

  orgName = '';
  orgId = '';
  orgAddr = '';
  orgMail = '';
  orgPhnum = '';

  orgForm: FormGroup;


  constructor(private router: Router, private httpService: HttpService, private formBuilder: FormBuilder, private breakpointObserver: BreakpointObserver) {
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
        this.toggleSidebar();
      }
    });
  }
  dataSource: OrgDataSource = new OrgDataSource(this.httpService);
  matcher: any;
  ngOnInit() {
    this.orgForm = this.formBuilder.group({
      orgName: [null, Validators.required],
      orgId: [null, Validators.required],
      orgAddr: [null, Validators.required],
      orgMail: [null, Validators.required],
      orgPhnum: [null, Validators.required]

    });

  }

  onFormSubmit(form: NgForm) {
    this.httpService.addorganization(form)
      .subscribe(res => {
        const id = res['_id'];
        console.log(id);
        this.router.navigate(['/globaladminview', id]);
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



