import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpService} from '../../http.service';
import {NavigationEnd} from '@angular/router';
import { Observable } from 'rxjs';

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-orgquessetedit',
  templateUrl: './orgquessetedit.component.html',
  styleUrls: ['./orgquessetedit.component.scss']
})
export class OrgquesseteditComponent implements OnInit {
  public loggedUser1: any;
  public pushRightClass: string;
  public showMenu: string;
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.Handset
  )

  quesset = {};
  quesForm: FormGroup;

  matcher: any;


  constructor(private router: Router, private route: ActivatedRoute, private httpService: HttpService, private formBuilder: FormBuilder, private breakpointObserver: BreakpointObserver) {
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
        this.toggleSidebar();
      }
    });
  }

  ngOnInit() {
    this.quesForm = this.formBuilder.group({
      'deptname': [null, Validators.required],
      'quessetName': [null, Validators.required],
      'ques1': [null, Validators.required],
      'ques2': [null, Validators.required],
      'ques3': [null, Validators.required],
      'ques4': [null, Validators.required],
      'ques5': [null, Validators.required],
      'date': [null, Validators.required]

    });
    this.getQuesset(this.route.snapshot.params['id']);
    this.pushRightClass = 'push-right';
    this.showMenu = '';
    this.httpService.currentUser1().subscribe(res => {
      this.loggedUser1= res.orgName ;
      console.log(res.orgName);
      console.log('logged user', this.loggedUser1);
    }, (err) => {
      console.log(err);
    });
    this.quesForm = this.formBuilder.group({
      'deptname': [null, Validators.required],
      'quessetName': [null, Validators.required],
      'ques1': [null, Validators.required],
      'ques2': [null, Validators.required],
      'ques3': [null, Validators.required],
      'ques4': [null, Validators.required],
      'ques5': [null, Validators.required],
      'date': [null, Validators.required]

    });
    this.getQuesset(this.route.snapshot.params['id']);
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

  onFormSubmit(form: NgForm) {
    let id = this.route.snapshot.params['id'];
    console.log(form)
    this.httpService.updateQuesset(id, form)
      .subscribe(res => {
        this.router.navigate(['/orgquessetview', id]);
      }, (err) => {
        console.log(err);
      });
  }

  getQuesset(id) {
    this.httpService.getQuesset(id).subscribe(data => {
      id = data._id;
      this.quesForm.setValue({
        deptname: data.deptname,
        quessetName: data.quessetName,
        ques1: data.ques1,
        ques2: data.ques2,
        ques3: data.ques3,
        ques4: data.ques4,
        ques5: data.ques5,
        date: data.date



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
