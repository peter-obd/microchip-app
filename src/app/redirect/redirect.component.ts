import { Component, Inject, Injectable, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MaterialModule,  } from '../material/material.module';
import { PasswordComponent } from '../password/password.component';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})

// @Injectable({providedIn : 'root'})
// const matdialog = MatDialog

export class RedirectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


