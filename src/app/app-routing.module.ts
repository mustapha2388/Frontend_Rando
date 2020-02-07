import { Routes, RouterModule } from '@angular/router';
import { TrekComponent } from './components/trek/trek.component';
import { NgModule } from '@angular/core';
import { TrekListeComponent } from './components/trek-liste/trek-liste.component';
import { EditionComponent } from './components/edition/edition.component';
import { CreationComponent } from './components/creation/creation.component';



export const routes: Routes = [

  { path: 'treks', component: TrekListeComponent },
  { path: 'trek/:id', component: TrekComponent },
  { path: 'edit/:id', component: EditionComponent },
  { path: 'creation', component: CreationComponent },
  { path: '', pathMatch: 'full', redirectTo: '/treks' }
];

// @NgModule(
//       {
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
//   })
export class AppRoutingModule { }

