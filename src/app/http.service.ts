import { Injectable } from '@angular/core';
import {Observable, of, throwError, pipe} from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {catchError, tap, map} from 'rxjs/operators';
import {MatTableDataSource} from '@angular/material';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:3000/registration';


const apiUrl1 = 'http://localhost:3000/loginpage';
const apiUrl2 = 'http://localhost:3000/globaladmin';
const apiUrl3 = 'http://localhost:3000/globaladminadd';
const apiUrl4 = 'http://localhost:3000/globaladminview';
const apiUrl5 = 'http://localhost:3000/globaladminedit';
const apiUrl6 = 'http://localhost:3000/orgquessetadd';
const apiUrl7 = 'http://localhost:3000/organizationadminquest';
const apiUrl8 = 'http://localhost:3000/orgquessetview';
const apiUrl9 = 'http://localhost:3000/orgquessetedit';

const apiurl11 = 'http://localhost:3000/orgprof';
const apiurl12 = 'http://localhost:3000/orgprofedit';
const apiurl13 = 'http://localhost:3000/orgprofview';
const apiurl14 = 'http://localhost:3000/registrationpage';
const apiurl15 = 'http://localhost:3000/login';
const apiurl16 = 'http://localhost:3000/userprofile';
// tslint:disable-next-line: class-name
interface registerResponse {
  success: boolean;
  message; string;
}
// tslint:disable-next-line: class-name
interface myData {
  success: boolean;
  message: string;
  status: number;

}
@Injectable({
  providedIn: 'root'
})

export class HttpService {
  dataSource: MatTableDataSource<unknown>;
  constructor(private http: HttpClient) {}

  get isLoggedIn() {
    return this.loggedInStatus;
  }

  test = 'How r u?';
  private loggedInStatus = false;
  public loggedUser: any;
  public loggedUser1: any;
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
  }
  httpGet(url) {
    return this.http.get(url);
  }
  httpPost(url, {}) {
    return this.http.post(url, { name: 'Subrat' });
  }
  registerOrgAdmin(user) {
      this.http.post<registerResponse>(apiurl14, user
      ).subscribe(res => {
        console.log(res);
      });

    }
  registerProf(user1) {
    this.http.post<registerResponse>(apiUrl, user1
    ).subscribe(res => {
      console.log(res);
    });

  }
  registerGlobAdmin(user) {
    this.http.post<registerResponse>(apiUrl, user
    ).subscribe(res => {
      console.log(res);
    });

  }

    getUserDetails(user): Observable<any> {
      console.log(user);
      // post these details to API server return user info if correct
      this.loggedUser1 = this.http.post(apiUrl1, user, httpOptions).pipe(
        map(this.extractData),
        catchError(this.handleError));
      console.log('abc');
      console.log(this.loggedUser1);
      return  this.loggedUser1;


    }


  getProfDetails(user): Observable<any>  {
    console.log(user);
    // post these details to API server return user info if correct
    this.loggedUser = this.http.post(apiurl15, user, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
    console.log('abc');
    console.log(this.loggedUser);
    return  this.loggedUser;

  }

  sendEmail(url, data) {
    return this.http.post(url, data);
  }

  addorganization(data)  {

    return this.http.post(apiUrl3, data)
      .pipe(
        catchError(this.handleError)
      );

  }

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }
  getOrganizations(): Observable<any> {
    return this.http.get(apiUrl2, httpOptions).pipe(
      map(this.extractData),
    catchError(this.handleError));


  }
  getOrganization(id: string): Observable<any> {
    const url = `${apiUrl4}/${id}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
}
  updateOrganization(id: string, data): Observable<any> {
    const url = `${apiUrl5}/${id}`;
    return this.http.put(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  updateUser(user): Observable<any>  {
    console.log('sahithya');
console.log(user);
    return this.http.put(apiurl16, user ).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  deleteOrganization(id: string): Observable<{}> {
    const url = `${apiUrl4}/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  addquestionset(data) {
   console.log(data);
   return this.http.post(apiUrl6, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );

  }
  getquessets(): Observable<any> {
    return this.http.get(apiUrl7, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));


  }
  updateQuesset(id: string, data): Observable<any> {
    const url = `${apiUrl9}/${id}`;
    return this.http.put(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  getQuesset(id: string): Observable<any> {
    const url = `${apiUrl8}/${id}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  deleteQuestset(id: string): Observable<{}> {
    const url = `${apiUrl8}/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  addprof(data) {

    return this.http.post(apiUrl, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );

  }
  getProfessorDetails(): Observable<any> {
    return this.http.get(apiurl11,  httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));


  }
  getProf(id: string): Observable<any> {
    const url = `${apiurl13}/${id}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  updateProf(id: string, data): Observable<any> {
    const url = `${apiurl12}/${id}`;
    return this.http.put(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  deleteProf(id: string): Observable<{}> {
    const url = `${apiurl13}/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  currentUser(): Observable<any> {
    return this.loggedUser;
  }
  currentUser1(): Observable<any> {
    return this.loggedUser1;
  }
  logOutUser() {
    this.loggedUser = null;
    return  this.loggedUser;
  }
  logOutUser1() {
    this.loggedUser = null;
    return  this.loggedUser1;
  }

}
