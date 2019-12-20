import { Routes, RouterModule } from '@angular/router';
import { RouteComponent } from './components/route/route.component';
import { NgModule } from '@angular/core';
import { TrekListeComponent } from './components/trek-liste/trek-liste.component';



export const routes: Routes = [

    { path: 'route/:id', component: RouteComponent },
    { path: '', component: TrekListeComponent }
  ];

// @NgModule(
//       {
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
//   })
export class AppRoutingModule { }

