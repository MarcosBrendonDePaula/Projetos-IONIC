import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nubank-interface',
  templateUrl: './nubank-interface.page.html',
  styleUrls: ['./nubank-interface.page.scss'],
})
export class NubankInterfacePage implements OnInit {
  
  menu_options  : Array<any> = [
    {icon:'help-circle', text:'Me ajuda'},
    {icon:'person', text:'Perfil'},
    {icon:'cash', text:'Configurar conta'},
    {icon:'card', text:'Configurar cartão'},
    {icon:'phone-portrait', text:'Configurações do app'},
  ];

  rodape_options: Array<any> = [
    {icon:'person-add', text:'Indicar Amigos'},
    {icon:'phone-portrait', text:'Recarga de Celular'},
    {icon:'wallet', text:'Depositar'},
    {icon:'options', text:'Alterar limite'},
    {icon:'help-circle', text:'Ajuda'},
    {icon:'barcode', text:'Pagar'},
    {icon:'lock-open', text:'Bloquear Cartão'},
    {icon:'card', text:'Meus cartoes'}
  ];

  slides_options = {
    slidesPerView: 3,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    freeMode: true
  }

  constructor() { }

  ngOnInit() {
  }

}
