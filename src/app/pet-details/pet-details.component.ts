import { Component,Inject, Injectable, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NewPet } from '../models/newPet.model';
import { MyService } from '../myService';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MaterialModule,  } from '../material/material.module';
import { PasswordComponent } from '../password/password.component';


@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})



export class PetDetailsComponent implements OnInit {
  
   // pet = {name: "peter" , id : 12345 , location:"bziza"  }
   
   @Input() microchip = 0
   @Input() name = ""
   @Input() dogsParents = ""
   @Input() phoneNumber = 0;
   password = ""


   status : boolean = false
   

  //  name = ''
  //  id = 0 
  //  location = ''

  constructor(private _activatedRoute: ActivatedRoute, private service2 : MyService, @Inject(MatDialog) public dialog: MatDialog) { }
   

  ngOnInit(): void {
    
      this._activatedRoute.paramMap.subscribe(params => { 
      var microchip =  parseInt(params.get('microchip')!)
      this.petview(microchip)  
   })
  
  }
  
  
  
  
    // getPet(ms: Number){
       
    //    var cpet =  this.service2.array.find(p => p.microchip == ms);
    //    if (cpet == null) {
    //      this.status = true
    //    }else{
    //    this.microshipnbr = cpet!.microchip;
    //    this.petname = cpet!.name
    //    }

    petview(microchip : any): void{
     this.service2.getByMicro(microchip).subscribe(
       (res: NewPet)=>{
        this.microchip= res.microchip
         this.name = res.name
         this.dogsParents = res.dogsParents
         this.phoneNumber = res.phoneNumber
        
       }
     )
    }

    openDialog(): void {
    
      const dialogRef = this.dialog.open(PasswordComponent, {
        data:{
         microchip: this.microchip
        }
        
  
        
        
     
      });
  
      dialogRef.afterClosed().subscribe((result : any)  => {
        console.log('The dialog was closed');
         
      });
    }

}
  
  
  
  
