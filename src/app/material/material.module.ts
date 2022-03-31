import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog'


const Materials : any = [
  MatDialogModule
]

@NgModule({
 
  imports: [
    CommonModule,
    Materials
  ],
  exports:[
    Materials

  ]

})
export class MaterialModule { }
