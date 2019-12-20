import { Routes, RouterModule } from '@angular/router';
import { TrekComponent } from './components/trek/trek.component';
import { NgModule } from '@angular/core';
import { TrekListeComponent } from './components/trek-liste/trek-liste.component';



export const routes: Routes = [

    { path: 'trek/:id', component: TrekComponent },
    { path: '', component: TrekListeComponent }
  ];

// @NgModule(
//       {
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
//   })
export class AppRoutingModule { }

