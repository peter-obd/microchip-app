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

 

  constructor(private lzalem3alService : MyService, private ref: ChangeDetectorRef ) { }

  ngOnInit(): void {
  }

  micronumb3 = new FormGroup({

    "petname" : new FormControl(null, Validators.required),
    "NewMicrochipNumber" : new FormControl(null, Validators.required),
    "Password2": new FormControl(null, Validators.required),


  })

  

   onSubmit() {

     var newpet1 = new NewPet()
     newpet1.petName = this.micronumb3.get('petname')?.value
     newpet1.microchipNumber = this.micronumb3.get('NewMicrochipNumber')?.value
     newpet1.password = this.micronumb3.get('Password2')?.value
     this.lzalem3alService.array.push(newpet1)
     
     console.log(this.lzalem3alService.array)
     this.micronumb3.reset();

    
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
