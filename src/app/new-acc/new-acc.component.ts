import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { NewPet } from '../models/newPet.model';
import { MyService } from '../myService';

@Component({
  selector: 'app-new-acc',
  templateUrl: './new-acc.component.html',
  styleUrls: ['./new-acc.component.css']
})
export class NewAccComponent implements OnInit {

 
  ifError?: string;
  constructor(private lzalem3alService : MyService, private ref: ChangeDetectorRef ) { }

  ngOnInit(): void {
  }

  micronumb3 = new FormGroup({

    "name" : new FormControl(null, Validators.required),
    "microchip" : new FormControl(null, Validators.required),
    "dogsParents": new FormControl(null, Validators.required),
    "phoneNumber": new FormControl(null, Validators.required),
    "password": new FormControl(null, Validators.required),


  })

  

   onSubmit() {
    this.ifError = undefined
     var newpet1 = new NewPet()
     newpet1.name = this.micronumb3?.get('name')?.value
     newpet1.microchip = this.micronumb3?.get('microchip')?.value
     newpet1.dogsParents = this.micronumb3?.get('dogsParents')?.value
     newpet1.phoneNumber = this.micronumb3?.get('phoneNumber')?.value
     newpet1.password = this.micronumb3?.get('password')?.value

    //  this.lzalem3alService.array.push(newpet1)
    this.lzalem3alService.addNewPet(newpet1).subscribe(
      (res : any)=>{
        this.micronumb3.reset();
        console.log(res)},
      (err)=>{
        this.ifError = err.error.message
      }
    )
     
    //  console.log(this.lzalem3alService.array)
    

    
  }

  onChange(){
    this.ifError= undefined
  }

  

  // clearForm(){
  //   this.micronumb3.get('petname')?.value == ''
  //   this.micronumb3.get('NewMicrochipNumber')?.value ==''
  //   this.micronumb3.get('Password2')?.value == ''
  //   this.ref.detectChanges()


  // }

  // completeLogin(){   
  
  //   this.login.reset();  
  //   // calling this method will reset the method
       
  //   }



}
