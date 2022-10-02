import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';



@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  addUserForm: FormGroup=new FormGroup({});

  constructor(private formbuilder:FormBuilder,private userservice:UserServiceService) { }

  ngOnInit(): void {
    this.addUserForm=this.formbuilder.group({
      'username':new FormControl(''),
      'email':new FormControl(''),
      'contact':new FormControl('')
    })
  }


  createUser(){

    console.log(this.addUserForm.value);
    this.userservice.addUser(this.addUserForm.value).subscribe(data =>{
      console.log('user created');
      console.log(data);
    // },err=>{
    //   console.log('error at creation')
    })
  }
}
