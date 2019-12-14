import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {HttpService} from '../../http.service';
import {FormBuilder} from '@angular/forms';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-orgprofview',
  templateUrl: './orgprofview.component.html',
  styleUrls: ['./orgprofview.component.scss']
})
export class OrgprofviewComponent implements OnInit {
  public loggedUser1: any;
  public pushRightClass: string;
  public showMenu: string;
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.Handset
  )

  prof: {

    profId: any;
    profName: any;
    orgName1: any;
    profMail: any;
    orgAddr1: any;
    profPhnum: any;

    _id: '/orgprofedit';
  };

  constructor(private router: ActivatedRoute, private httpService: HttpService, private formBuilder: FormBuilder, private route: Router, private breakpointObserver: BreakpointObserver) {
    this.route.events.subscribe(val => {
      if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
        this.toggleSidebar();
      }
    });
  }

  ngOnInit() {
    this.getProfDetails(this.router.snapshot.params['id']);
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

  deleteprofDetails(id) {
    this.httpService.deleteProf(id)
      .subscribe(res => {
          this.route.navigate(['/orgprof']);
        }, (err) => {
          console.log(err);
        }
      );
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


}



