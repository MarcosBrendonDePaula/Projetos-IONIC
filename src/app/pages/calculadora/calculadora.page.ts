import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
})
export class CalculadoraPage implements OnInit {
  text:string = "";
  
  special_keys = ["(",")","/","X","+","-","+",",","√","=","«"];

  strotura = [
    "(",")","«","X",
    "7","8","9","/",
    "4","5","6","+",
    "1","2","3","-",
    "0","","=",","
  ]

  constructor() { }

  ngOnInit() {
  }
  
  addKey(key: string){
    switch(key){
      case "«":{
        this.text = this.text.slice(0,this.text.length-1)
        return
      }
      case "=":{
        return
      }
    }
    this.text+=key
  }

  limpar(){
    this.text = "";
  }
}
