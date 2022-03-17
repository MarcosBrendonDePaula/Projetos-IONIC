import { Injectable } from '@angular/core';
//import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Http,HttpResponse } from '@capacitor-community/http';

@Injectable({
  providedIn: 'root'
})
export class CalcapiService {
  url:String = 'http://api.mathjs.org/v4/?expr='
  
  constructor() {

  }
  
  calcular(eq=""){
    
    const options = {
      url: this.url+encodeURIComponent(eq.replace("X","*")),
    };
    return Http.get(options);
  }
}
