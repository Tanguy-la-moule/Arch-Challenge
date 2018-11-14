import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { FormsModule } from '@angular/forms';

import { ProjectPickerComponent } from './components/project-picker/project-picker.component';
import { AuthComponent } from './components/auth/auth.component';

import { ProjectService} from './services/projects/project.service';
import { AuthService } from './services/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ProjectPickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ProjectService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
