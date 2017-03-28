import { Component } from '@angular/core';
import { LoginService } from './services/loginService';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { AdminComponent } from './app.admin.component';
import { routes } from './services/app.router';

@Component({
    selector:'app-login',
    templateUrl:'html/login.html',
    styleUrls: ['styles/bootstrap-theme.min.css','styles/bootstrap.min.css','styles/login.css'],
    providers:[LoginService]
})

export class LoginComponent {
    model: any = {};
    private subject = new Subject<any>();
     private router: Router;
    constructor(private loginService : LoginService ) {
        
    }

    login() {
        console.log('calling');
        if(this.loginService.login(this.model.username, this.model.password)){
            this.router.navigate(["admin"]);
            //this.router.navigate(['./app.admin.component']);
            //this.alertService.error(error);
            //console.log('yes');
            //this.subject.next({ type: 'success', text: "Authenticated.." });
        }
        else {
            //this.alertService.error(error);
            console.log('No ');
            this.subject.next({ type: 'error', text: "Naa ho pavega.." });
        }
    }
}