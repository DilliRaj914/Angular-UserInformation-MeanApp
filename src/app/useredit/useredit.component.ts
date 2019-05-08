import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css']
})
export class UsereditComponent implements OnInit {
  usersdetailsForm: FormGroup;
  ID:string='';
  Name:string='';
  MobileNumber:string='';
  address:string='';
  
  constructor(private router: Router,private route:ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }
 
  ngOnInit() {
    this.getdetails(this.route.snapshot.params['id']);
    this.usersdetailsForm = this.formBuilder.group({
      'ID' : [null, Validators.required],
      'Name' : [null, Validators.required],
     'MobileNumber' : [null, Validators.required],
      'address' : [null, Validators.required]
          });
  }

  getdetails(id) {
    this.api.getdetails(id).subscribe(data => {
      this.ID = data._id;
      this.usersdetailsForm.setValue({
        isbn: data.isbn,
        Name: data.title,
       MobileNumber: data.author,
        address: data.description,
      });
    });
  }

  onFormSubmit(form:NgForm) {
    this.api.updatedetails(this.ID, form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/userdetail', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

  userDetails() {
    this.router.navigate(['/userdetail', this.ID]);
  }
}
