import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
 
  details = {};

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.getDetail(this.route.snapshot.params['id']);
  }

  getDetail(id) {
    this.api.getdetails(id)
      .subscribe(data => {
        console.log(data);
        this.details = data;
      });
  }

  deletedetail(id) {
    this.api.deletedetails(id)
      .subscribe(res => {
          this.router.navigate(['/users']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
