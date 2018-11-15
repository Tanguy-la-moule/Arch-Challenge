import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ProjectPickerComponent } from './components/project-picker/project-picker.component';
import { AuthComponent } from './components/auth/auth.component';
import { StreamComponent } from './components/stream/stream.component';

import { ProjectService} from './services/projects/project.service';
import { AuthService } from './services/auth/auth.service';
import { DataService } from './services/data/data.service';
import { ChartComponent } from './components/chart/chart.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/auth/token.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ProjectPickerComponent,
    StreamComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    ProjectService,
    AuthService,
    DataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
