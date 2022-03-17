import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-calc-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  special_keys = ["(",")","/","*","+","-","+",",","√","=","«"];
  color:any = "";

  @Input() ButtonNum = ""
  constructor() { }

  ngOnInit() {
    this.UpdateColor();
  }

  UpdateColor(){
    if (this.special_keys.indexOf(this.ButtonNum) != -1) { 
      this.color = "danger";
      return
    }
    this.color = "medium";
  }
  
}
