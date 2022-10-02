import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserServiceService } from 'src/app/services/user-service.service';
// import{}
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  constructor(private userservice:UserServiceService) { }
  listusers!:any;
  userDetails:any;
  ngOnInit(): void {
    this.userservice.listuser().subscribe(data=>{
      this.listusers=data;
      console.log(data);
      this.userDetails=data;
   });
   console.log(this.listusers);
  }

}
