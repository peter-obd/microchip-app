import { Component, Inject, Injectable, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { NewPet } from '../models/newPet.model';
import { MyService } from '../myService';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})

export class PasswordComponent implements OnInit {

  

  constructor(private service1 : MyService, private router: Router , private newpet : NewPet,private _activatedRoute: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: {microchip: number}, public dialogRef: MatDialogRef<PasswordComponent>) { }

  @Input() password = ""

  ngOnInit(): void {
    

 

    
  }

  incorrectPassword?: string;

  micronumb1 = new FormGroup({
     
     'password' : new FormControl(null, Validators.required)

  })

 clickmepass(){
   this.service1.getByPass(this.micronumb1.get('password')?.value, this.data.microchip)
   .subscribe(
     (res: NewPet)=> {
      this.router.navigate(['/editpass', res.microchip
      // this.micronumb1.get('password')?.value,
      
      // res.password
    ])
    this.dialogRef.close();

     },
     (err) => {
       console.log(err.message)
       console.log(err.error.message)
       this.incorrectPassword = err.error.message
       console.log(this.incorrectPassword)
       
     }


   )
 }




}


 

  




