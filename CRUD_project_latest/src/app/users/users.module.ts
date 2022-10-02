import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewUserComponent } from './view-user/view-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { BrowserModule } from '@angular/platform-browser'
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
// import {MatSnackBar} from '@angular/material';
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    ViewUserComponent,
    AddUserComponent,
    EditUserComponent,
    DeleteUserComponent,
    ListUserComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MatListModule,
    RouterModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers:[
    {provide:MAT_SNACK_BAR_DEFAULT_OPTIONS,useValue:{duration :2500}}
  ]
})
export class UsersModule { }
