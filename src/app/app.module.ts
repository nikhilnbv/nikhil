import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './app.login.component';

import { AdminComponent } from './admin/app.admin.component';
import { CreateUserComponent } from './admin/createuser.component';
import { UserDetailComponent } from './admin/userdetail.component';

import { TrainerComponent } from './trainer/app.trainer.component';
import { TraineeComponent } from './trainee/app.trainee.component';
import { LoginService } from './services/loginService';
import { routing }        from './services/app.router';
import { AuthGuard } from './guard/authGuard';

@NgModule({
  declarations: [
    AppComponent, LoginComponent, AdminComponent, CreateUserComponent, UserDetailComponent,
     TrainerComponent, TraineeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    routing
  ],
  providers: [LoginService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
