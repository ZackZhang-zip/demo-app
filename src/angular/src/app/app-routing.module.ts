import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Demo3Component } from './demo3/demo3.component';
import { HomeComponent } from './home/home.component';
import { Demo4Component } from './demo4/demo4.component';

const routes: Routes = [
  {path: '', component: HomeComponent, data: {animation: 'home'}},
  {path: 'home', component: HomeComponent, data: {animation: 'home'}},
  {path: 'demo1', component: Demo1Component, data: {animation: 'demo1'}},
  {path: 'demo2', component: Demo2Component, data: {animation: 'demo2'}},
  {path: 'demo3', component: Demo3Component, data: {animation: 'demo3'}},
  {path: 'demo4', component: Demo4Component, data: {animation: 'demo4'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
