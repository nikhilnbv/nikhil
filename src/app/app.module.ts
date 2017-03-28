import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './app.login.component';

import { AdminComponent } from './app.admin.component';
import { TrainerComponent } from './app.trainer.component';
import { TraineeComponent } from './app.trainee.component';
import { LoginService } from './services/loginService';
import { routing }        from './services/app.router';


@NgModule({
  declarations: [
    AppComponent, LoginComponent, AdminComponent, TrainerComponent, TraineeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    routing
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
