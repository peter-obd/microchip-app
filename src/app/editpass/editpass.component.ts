import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import { NewPet } from '../models/newPet.model';
import { MyService } from '../myService';

@Component({
  selector: 'app-editpass',
  templateUrl: './editpass.component.html',
  styleUrls: ['./editpass.component.css']
})
export class EditpassComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute, private service2: MyService,) { }

  ngOnInit(): void {
    //   this._activatedRoute.paramMap.subscribe(params => { 
    //    var password = 
    //     console.log(password)
    //     this.postEdit(password)
    //  })
    //  var password =  parseInt(params.get('password')!)

    //  var password =  this._activatedRoute.snapshot.paramMap.get('password')


    // this._activatedRoute.paramMap.subscribe((params: Params) =>{
    //   var password = params['password']
    //   console.log(password)
    this._activatedRoute.paramMap.subscribe(params => {
      var microchip = parseInt(params.get('microchip')!)
      console.log(microchip)
      this.postEdit(microchip)


    })

  }

  micronumb1 = new FormGroup({

    'microchip': new FormControl(null, Validators.required),
    'petname': new FormControl(null, Validators.required),
    'parentsname': new FormControl(null, Validators.required),
    'phonenumber': new FormControl(null, Validators.required),
    'password': new FormControl(null, Validators.required)



  })

  postEdit(microchip: any): void {
    this.service2.getByMicro(microchip).subscribe(
      (res: NewPet) => {
        this.micronumb1.get('microchip')?.setValue(res.microchip)
        this.micronumb1.get('petname')?.setValue(res.name)
        this.micronumb1.get('parentsname')?.setValue(res.dogsParents)
        this.micronumb1.get('phonenumber')?.setValue(res.phoneNumber)
        this.micronumb1.get('password')?.setValue(res.password)



      }




    )

  }

  updatePost() {
    let newPet = new NewPet()
    newPet.microchip = this.micronumb1.get('microchip')?.value
    newPet.dogsParents = this.micronumb1.get('parentsname')?.value
    newPet.name = this.micronumb1.get('petname')?.value
    newPet.phoneNumber = this.micronumb1.get('phonenumber')?.value
    newPet.password = this.micronumb1.get('password')?.value
    this.service2.updateMeth(newPet.microchip, newPet).subscribe(
      (up) => {

      }
    )
    this.micronumb1.reset();

  }

}





// this.micronumb1.setValue({
//   microchip : res.microchip,
//   'petname': res.name,
//   'parentsname': res.dogsParents,
//   'phonenumber': res.phoneNumber,
//   'password': res.phoneNumber


// })


