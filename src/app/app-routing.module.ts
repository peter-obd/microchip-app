import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { NewAccComponent } from './new-acc/new-acc.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { TnaynetonComponent } from './tnayneton/tnayneton.component';

const routes: Routes = [
  { path: 'newAcc', component: NewAccComponent },

  { path: 'home', component: TnaynetonComponent },

  { path: 'edit', component: EditComponent },

  { path: 'details/:microchipNumber', component: PetDetailsComponent },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
