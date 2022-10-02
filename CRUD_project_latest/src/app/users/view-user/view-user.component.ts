import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
userID:string='';
  userDetails: any;
  constructor(private service:UserServiceService,private activatedRoute:ActivatedRoute) { }


  ngOnInit(): void {
    // this.service.viewuser()
  this.activatedRoute.params.subscribe(data =>{
    this.userID=data['id'];
    console.log(this.userID);
 })
  
 this.service.viewuser(this.userID).subscribe(data => {
  this.userDetails=data;
console.log(data);
 })
  }
}
