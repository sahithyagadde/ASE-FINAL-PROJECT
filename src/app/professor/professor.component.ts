import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {
  list1: string[];
  list2: string[];
  AddRown: string[];
  n: 1;
  x: 0;
  public studentIds;
  public questName;
  public setName;
  public setInfo: any = {};
  public setDate;
  public setNumber;
  public fieldArray: Array<any> = [];
  loading = false;
  buttionText = 'Send';

  constructor(public http: HttpService, private httpService: HttpService) {
  }

  ngOnInit() {
  }

  AddRow(questName) {
    console.log('AddRow: ' + questName);
    this.fieldArray.push(this.setInfo);
    this.setInfo = {};
    // this.httpService.questSet(questName).subscribe(data => {
    //  console.log(data);
    //  if (data.success) {
    //    console.log('Question saved successfully');
    //  } else {
    //   console.log('Error while saving question');
    //  }
    // });
    // }
    // register() {
    // this.loading = true;
    // this.buttionText = 'Sending...';
    // alert('b4 sending emails are :' + this.studentIds);
    // const user = {
    //  email: this.studentIds
    //  };
    // alert('user emails are :' + user.email);
    //this.http.sendEmail('http://localhost:3000/sendmail', user).subscribe(
    //  data => {
    //   const res: any = data;
    //   console.log(
    //     `For ${user.email}, mail has been sent and the message id is ${res.messageId}`
    //   );
    //  },
    //  err => {
    //   console.log(err);
    //   this.loading = false;
    //   this.buttionText = 'Send';
    //  }, () => {
    //    this.loading = false;
    //   this.buttionText = 'Send';
    //  }
    // );
    // }
// }
  }
}
