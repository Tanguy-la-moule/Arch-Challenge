import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './components/auth/auth.component';
import { ProjectPickerComponent } from './components/project-picker/project-picker.component'

const routes: Routes = [
  {path: 'login', component: AuthComponent},
  {path: 'project', component: ProjectPickerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
