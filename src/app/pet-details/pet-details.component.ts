import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MyService } from '../myService';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})



export class PetDetailsComponent implements OnInit {
  
   // pet = {name: "peter" , id : 12345 , location:"bziza"  }
   
   microshipnbr = 0
   petname = ""


   status : boolean = false
   

  //  name = ''
  //  id = 0 
  //  location = ''

  constructor(private _activatedRoute: ActivatedRoute, private service2 : MyService) { }
   

  ngOnInit(): void {
    
      this._activatedRoute.paramMap.subscribe(params => { 
      var id =  parseInt(params.get('microchipNumber')!); 
      this.getPet(id)
  }

    )}  
  
  
  
    getPet(ms: Number){
       
       var cpet =  this.service2.array.find(p => p.microchipNumber == ms);
       if (cpet == null) {
         this.status = true
       }else{
       this.microshipnbr = cpet!.microchipNumber;
       this.petname = cpet!.petName
       }


    }
  
  
  
  }
