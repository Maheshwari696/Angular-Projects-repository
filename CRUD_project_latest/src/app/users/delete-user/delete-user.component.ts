import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  constructor(private activeroute:ActivatedRoute,private service:UserServiceService,private _snackBar:MatSnackBar) { }
userid:string='';
  ngOnInit(): void {
    this.activeroute.params.subscribe(data =>{
this.userid=data['id'];
    });
    if(this.userid ){
      this.service.deleteuser(this.userid).subscribe(data=>{
        console.log(data);
this._snackBar.open('user deleted success');
      });
    }
  }

}
