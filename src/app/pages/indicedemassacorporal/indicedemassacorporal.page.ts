import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indicedemassacorporal',
  templateUrl: './indicedemassacorporal.page.html',
  styleUrls: ['./indicedemassacorporal.page.scss'],
})
export class IndicedemassacorporalPage implements OnInit {

  altura:any = 0;
  peso:any   = 0;
  imc:any    = 0;

  constructor() { }

  ngOnInit() {
  }


  calcIMC(){
    this.imc = this.peso/Math.pow(this.altura,2);
    return this.imc;
  }

  getReferncia(value:Number = 0): void{
    if (value < 17) {
      //muito abaixo do peso
    }else if (value >=17 && value <= 18.5){
      //abaixo do peso
    }else if (value >=18.5 && value <=24.9){
      //peso normal
    }else if (value >=25 && value <=29.9){
      //A cima do peso
    }else if (value >=30 && value <=34.9) {
      //Obesidade 1
    }else if (value >=35 && value <=39.9) {
      //Obesidade 2
    }else if (value >=40) {
      //Obesidade 3
    }
  }
}
