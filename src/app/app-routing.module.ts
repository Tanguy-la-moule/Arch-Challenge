import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './components/auth/auth.component';
import { ProjectPickerComponent } from './components/project-picker/project-picker.component'
import { ChartComponent } from './components/chart/chart.component';

const routes: Routes = [
  {path: 'login', component: AuthComponent},
  {path: 'project', component: ProjectPickerComponent},
  {path: 'chart', component: ChartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
