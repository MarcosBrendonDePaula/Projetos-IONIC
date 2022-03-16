import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bloco-opt-velha',
  templateUrl: './bloco-opt-velha.component.html',
  styleUrls: ['./bloco-opt-velha.component.scss'],
})
export class BlocoOptVelhaComponent implements OnInit {

  @Input() value: 'X' | 'O';
  constructor() { }


  ngOnInit() {}

}
