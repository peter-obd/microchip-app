import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { EditpassComponent } from './editpass/editpass.component';
import { NewAccComponent } from './new-acc/new-acc.component';
import { PasswordComponent } from './password/password.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { TnaynetonComponent } from './tnayneton/tnayneton.component';

const routes: Routes = [
  { path: 'newAcc', component: NewAccComponent },

  { path: 'home', component: TnaynetonComponent },

  { path: 'edit', component: EditComponent },

  { path: 'details/:microchip', component: PetDetailsComponent },
  
  { path: 'password', component: PasswordComponent },

   {path : 'editpass/:microchip', component : EditpassComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
