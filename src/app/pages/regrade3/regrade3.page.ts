import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regrade3',
  templateUrl: './regrade3.page.html',
  styleUrls: ['./regrade3.page.scss'],
})
export class Regrade3Page implements OnInit {
  
  atual_thema: string = 'primary';
  inverso:Boolean = false;
  values = [0,0,0,0];


  constructor() { }

  changetheme () {
    if(this.atual_thema == "primary") {
      this.atual_thema = "light";
    }else
      this.atual_thema = "primary"

    return this.atual_thema; 
  }

  mudartema() { 
    
    return
  }

  ngOnInit() {
  }

  recalcular() {
    
    if(this.inverso) {
      this.values[3] = (this.values[0]*this.values[1])/this.values[2]
      return;
    }
    this.values[3] = (this.values[2]*this.values[1])/this.values[0]
  }
}
