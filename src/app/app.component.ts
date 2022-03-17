import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public pages = {
    
    functional:[
      { title: 'Home', url: 'home', icon: 'home' },
      { title: 'Metronomo', url: 'metronomo', icon: 'timer' },
      { title: 'Jogo Da Velha', url: 'jogodavelha', icon: 'apps' },
      { title: 'Regra de 3', url: 'regrade3', icon: 'grid' },
      { title: 'Calculadora' , url: 'calculadora', icon: 'calculator'}
    ],
    
    layout:[
      { title: 'Nubak Interface', url: 'nubank-interface', icon: 'cube' },
    ]
  };
  constructor() {}
}
