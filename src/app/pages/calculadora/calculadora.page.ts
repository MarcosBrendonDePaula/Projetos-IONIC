import { Component, OnInit } from '@angular/core';
import {CalcapiService} from '../../services/calculadora/calcapi.service'
import {HttpResponse } from '@capacitor-community/http';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
})
export class CalculadoraPage implements OnInit {
  text:string = "";
  
  special_keys = ["(",")","/","*","+","-","+",",","√","=","«"];

  strotura = [
    "(",")","«","*",
    "7","8","9","/",
    "4","5","6","+",
    "1","2","3","-",
    "0","","=",","
  ]

  constructor(private CalcApi:CalcapiService) { }

  ngOnInit() {
  }
  
  addKey(key: string){
    switch(key){
      case "«":{
        this.text = this.text.slice(0,this.text.length-1)
        return
      }
      case "=":{
        this.CalcApi.calcular(this.text)
        .then((res:HttpResponse)=>{
          this.text = String(res.data) 
        })
        .catch((err)=>{
          console.log(err)
        })
        return
      }
    }
    this.text+=key
  }

  limpar(){
    this.text = "";
  }
}
