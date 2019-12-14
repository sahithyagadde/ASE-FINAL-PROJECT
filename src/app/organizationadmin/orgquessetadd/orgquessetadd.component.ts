import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpService} from '../../http.service';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {OrgDataSource} from '../../globadmin/globadmin.component';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import {NavigationEnd} from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-orgquessetadd',
  templateUrl: './orgquessetadd.component.html',
  styleUrls: ['./orgquessetadd.component.scss']
})
export class OrgquessetaddComponent implements OnInit {

  quessetName = '';
  ques1 = '';
  ques2 = '';
  ques3 = '';
  ques4 = '';
  ques5 = '';
  deptname = '';
  date = '';
  quesForm: FormGroup;
  public loggedUser1: any;
  public pushRightClass: string;
  public showMenu: string;
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.Handset)
  // tslint:disable-next-line:max-line-length
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
    this.quesForm = this.formBuilder.group({
      deptname: [null, Validators.required],
      quessetName: [null, Validators.required],
      ques1: [null, Validators.required],
      ques2: [null, Validators.required],
      ques3: [null, Validators.required],
      ques4: [null, Validators.required],
      ques5: [null, Validators.required],
      date:[null, Validators.required]
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
    this.httpService.addquestionset(form)
      .subscribe(res => {
        const id = res['_id'];
        console.log(id);

        this.router.navigate(['/orgquessetview', id]);
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

