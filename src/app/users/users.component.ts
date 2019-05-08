import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {DataSource}from '@angular/cdk/collections';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  details: any;
  displayedColumns = ['ID', 'Name', 'MobileNumber','address'];
  dataSource = new userdetailsDataSource(this.api);

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getdetail()
      .subscribe(res => {
        console.log(res);
        this.details = res;
      }, err => {
        console.log(err);
      });
  }
}

export class userdetailsDataSource extends DataSource<any> {
  constructor(private api: ApiService) {
    super()
  }

  connect() {
    return this.api.getdetail();
  }

  disconnect() {

  }
}
