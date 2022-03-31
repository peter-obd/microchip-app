import { Injectable } from "@angular/core";
import { NewPet } from "./models/newPet.model";
import {HttpClient, HttpClientModule} from "@angular/common/http"
@Injectable({
    providedIn: 'root'
})
export class  MyService {

    constructor (private http : HttpClient){}

     array : NewPet[] = [
        
    ]



    getall(){

      return  this.http.get("https://localhost:7233/api/obeid/get2")
      
    
    }

    addNewPet(pet : NewPet ){
      return this.http.post("http://localhost:8080/pet/", pet)
    }

    getByMicro(microchip : any){

      return this.http.get<NewPet>("http://localhost:8080/pet/"+ microchip)

    }

    getByPass(password : any, microchip : any){

      return this.http.post<NewPet>("http://localhost:8080/pet/edit/"+  microchip, {password : password})

    }

    getPostEdit(password:any){
      return this.http.get<NewPet>("http://localhost:8080/pet/postedit/"+ password)
    }

    //  updates = new NewPet

    updateMeth(microchip : any, updates: NewPet ){
      
      return this.http.patch("http://localhost:8080/pet/update/" + microchip, updates )
    }


}