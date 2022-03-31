import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskModule } from 'ngx-mask';
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
import { HttpClientModule } from '@angular/common/http';
import { PasswordComponent } from './password/password.component';
import { EditpassComponent } from './editpass/editpass.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MatDialogModule } from '@angular/material/dialog';


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
    PasswordComponent,
    EditpassComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    MatDialogModule
    
    

  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
