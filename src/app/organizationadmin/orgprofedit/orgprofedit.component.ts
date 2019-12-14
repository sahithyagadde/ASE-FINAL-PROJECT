import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpService} from '../../http.service';



import {OrgDataSource} from '../../globadmin/globadmin.component';

import { NavigationEnd} from '@angular/router';

import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-orgprofedit',
  templateUrl: './orgprofedit.component.html',
  styleUrls: ['./orgprofedit.component.scss']
})
export class OrgprofeditComponent implements OnInit {
  prof= {};
  profForm: FormGroup;

  matcher: any;
  public loggedUser1: any;
  public pushRightClass: string;
  public showMenu: string;
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.Handset
  )


  constructor(private router: Router, private route: ActivatedRoute, private httpService: HttpService, private formBuilder: FormBuilder, private breakpointObserver: BreakpointObserver) {
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
        this.toggleSidebar();
      }
    });
  }

  ngOnInit() {
    this.profForm = this.formBuilder.group({
      'profId': [null, Validators.required],
      'profName': [null, Validators.required],
      'orgName1': [null, Validators.required],
      'profMail': [null, Validators.required],
      'orgAddr1': [null, Validators.required],
      'profPhnum': [null, Validators.required]



    });
    this.getProf(this.route.snapshot.params['id']);
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

  getProfDetails(id) {
    console.log('abc');
    console.log(id);
    this.httpService.getProf(id)
      .subscribe(data => {
        console.log(data);
        this.prof = data;
      });
  }

  onFormSubmit(form: NgForm) {
    let id = this.route.snapshot.params['id'];
    console.log(form)
    this.httpService.updateProf(id, form)
      .subscribe(res => {
        this.router.navigate(['/orgprofview', id]);
      }, (err) => {
        console.log(err);
      });
  }

  getProf(id) {
    this.httpService.getProf(id).subscribe(data => {
      id = data._id;
      this.profForm.setValue({
        profId: data.profId,
        profName: data.profName,
        orgName1: data.orgName1,
        profMail: data.profMail,
        orgAddr1: data.orgAddr1,
        profPhnum: data.profPhnum




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
