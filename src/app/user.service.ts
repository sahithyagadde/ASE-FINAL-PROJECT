import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// tslint:disable-next-line: class-name
interface myData {
  email: string;
  status: boolean;
  quote: string;
}

// tslint:disable-next-line: class-name
interface isLoggedIn {
  status: boolean;
}

// tslint:disable-next-line: class-name
interface quoteStatus {
  success: boolean;
}

// tslint:disable-next-line: class-name
interface logoutStatus {
  success: boolean;
}
@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<myData>('/api/data');
  }

  updateQuote(value) {
    return this.http.post<quoteStatus>('/api/quote', {
      value
    });
  }

  isLoggedIn(): Observable<isLoggedIn> {
    return this.http.get<isLoggedIn>('/api/isloggedin');
  }

  logout() {
    return this.http.get<logoutStatus>('/api/logout');
  }

}
