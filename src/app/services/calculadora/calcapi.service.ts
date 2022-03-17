import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CalcapiService {
  url:String = 'http://api.mathjs.org/v4/?expr='
  
  constructor(private http:HttpClient) {

  }
  
  calcular(eq=""){
    let dest_url = this.url+encodeURIComponent(eq.replace("X","*"))
    return this.http.get(dest_url).toPromise();  
  }

}
