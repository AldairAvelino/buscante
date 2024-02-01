import { Routes } from '@angular/router';

import { ContatoComponent } from './pages/contato/contato.component';
import { ListaLivrosComponent } from './pages/lista-livros/lista-livros.component';
import { SobreComponent } from './pages/sobre/sobre.component';

export const routes: Routes = [
  {
    path: 'lista-livros',
    component: ListaLivrosComponent,
    title: 'Buscar Livros - Buscante'
  },
  {
    path: 'sobre',
    component: SobreComponent,
    title: 'Sobre - Buscante'
  },
  {
    path: 'contato',
    component: ContatoComponent,
    title: 'Entrar Em Contato - Buscante'
  },
  {
    path: '',
    redirectTo: 'lista-livros',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: ListaLivrosComponent
  }
];
