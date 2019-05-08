import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-usercreate',
  templateUrl: './usercreate.component.html',
  styleUrls: ['./usercreate.component.css']
})
export class UsercreateComponent implements OnInit {
  userdetailsForm: FormGroup;
  ID:string='';
  Name:string='';
  MobileNumber:string='';
  address:string=''; 
  
  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userdetailsForm = this.formBuilder.group({
      'ID' : [null, Validators.required],
      'Name' : [null, Validators.required],
      'MobileNumber' : [null, Validators.required],
      'address' : [null, Validators.required],     
    });
  }

  onFormSubmit(form:NgForm) {
    this.api.postdetails(form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/userdetail', id]);
        }, (err) => {
          console.log(err);
        });
  }
}
