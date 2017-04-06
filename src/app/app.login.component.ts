import { Component } from '@angular/core';
import { LoginService } from './services/loginService';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { AdminComponent } from './admin/app.admin.component';
import { routes } from './services/app.router';


@Component({
    //selector:'app-login',
    templateUrl:'html/login.html',
    styleUrls: ['styles/bootstrap-theme.min.css','styles/bootstrap.min.css','styles/login.css'],
    providers:[LoginService]
})

export class LoginComponent {
    model: any = {};
    
    private subject = new Subject<any>();
    //private router: Router;
    constructor(private loginService : LoginService, private router: Router ) {
        
    }

    login() { 
        
        console.log('calling');
        if(this.loginService.login(this.model.username, this.model.password)){
            if(this.model.username=="admin")                
                this.router.navigate(['/admin']);
            else if(this.model.username=="trainer")
                this.router.navigate(['/trainer']);
            else if(this.model.username=="trainee")
                this.router.navigate(['/trainee']);
        }
        else {
            console.log('No ');
            this.subject.next({ type: 'error', text: "Naa ho pavega.." });
        }
    }
}
