import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule ,  } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormComponent } from './form/form.component';
import { NewAccComponent } from './new-acc/new-acc.component';
import { TnaynetonComponent } from './tnayneton/tnayneton.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { EditComponent } from './edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyService } from './myService';
import { RedirectComponent } from './redirect/redirect.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormComponent,
    NewAccComponent,
    TnaynetonComponent,
    PetDetailsComponent,
    EditComponent,
    RedirectComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
