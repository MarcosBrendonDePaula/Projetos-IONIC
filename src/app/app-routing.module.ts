import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/components/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'metronomo',
    loadChildren: () => import('./pages/metronomo/metronomo.module').then( m => m.MetronomoPageModule)
  },
  {
    path: 'jogodavelha',
    loadChildren: () => import('./pages/jogodavelha/jogodavelha.module').then( m => m.JogodavelhaPageModule)
  },
  {
    path: 'nubank-interface',
    loadChildren: () => import('./pages/nubank-interface/nubank-interface.module').then( m => m.NubankInterfacePageModule)
  },
  {
    path: 'regrade3',
    loadChildren: () => import('./pages/regrade3/regrade3.module').then( m => m.Regrade3PageModule)
  },
  {
    path: 'indicedemassacorporal',
    loadChildren: () => import('./pages/indicedemassacorporal/indicedemassacorporal.module').then( m => m.IndicedemassacorporalPageModule)
  },
  {
    path: 'calculadora',
    loadChildren: () => import('./pages/calculadora/calculadora.module').then( m => m.CalculadoraPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
