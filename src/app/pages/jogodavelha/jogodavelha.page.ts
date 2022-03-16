import { Component, OnInit, ContentChild} from '@angular/core';


@Component({
  selector: 'app-jogodavelha',
  templateUrl: './jogodavelha.page.html',
  styleUrls: ['./jogodavelha.page.scss'],
})



export class JogodavelhaPage implements OnInit {
  
  static obj:JogodavelhaPage = undefined;
  
  squares : string[];
  xIsNext:boolean   = true;
  Player_Winner:any     = null;

  winnerMatriz = [
    [0,1,2],
    [3,4,5],
    [6,7,8], //
    [0,3,6], //
    [1,4,7], //
    [2,5,8], //
    [0,4,8], //
    [2,4,6]
  ];


  constructor() { 
    this.newGame()
  }
  
  get player(){
    return this.xIsNext ? 'X' : 'O';
  }

  newGame() {
    this.squares        = Array(9).fill(null);
    this.xIsNext        = true;
    this.Player_Winner  = null;
  }

  makeSelect(idx:number) {

    if(!this.squares[idx] && !this.Player_Winner) {
      this.squares.splice(idx,1,this.player)
      this.xIsNext = !this.xIsNext 
    }
    this.Player_Winner = this.winner
  }
  
  get winner() {
    
    for(let i of this.winnerMatriz){
      const [a,b,c] = i
      if(
        this.squares[a] &&
        this.squares[a] == this.squares[b]  &&
        this.squares[a] == this.squares[c]
      ){
        return this.squares[a];
      }

    }
    return null;
  }


  ngOnInit() {
    JogodavelhaPage.obj = this;
  }

}
