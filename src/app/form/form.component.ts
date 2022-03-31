import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { MyService } from '../myService';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private service1 : MyService, private router: Router ) { }

  ngOnInit(): void {
  }

 
  
  micronumb1 = new FormGroup({

    'microchip' : new FormControl(null, Validators.required)


  })

  onSelect(){

    this.router.navigate(['/details',this.micronumb1.get('microchip')?.value
      
    ])


  }}

  // this.micronumb1.get('MicrochipNumber')?.value