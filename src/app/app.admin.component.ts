import { Component } from '@angular/core';
import { LoginService } from './services/loginService';
import { Router } from '@angular/router';
import { routes } from './services/app.router';

@Component({
    selector:'app-admin',
    template:`
                <html>
                <head>
                <script type="text/javscript">
                    <!-- for desabling back button -->
                    function preventBack()
                    {
                        window.history.forward();
                    }
                    setTimeout("preventBack()",0);
                    window.onunload=function() {null};
                </script>
                </head>
                <body>
                    <h1>Welcome Admin</h1>
                    <button type="submit" (click)="logout()" >Logout</button>
                </body>
                </html>
    `,
    providers:[LoginService]
})

export class AdminComponent {

    constructor(private loginService : LoginService,private router: Router) {
        
    }

    logout() { 
        console.log('calling logout');
        this.loginService.logout();
        this.router.navigate(['/login']);
    }
}