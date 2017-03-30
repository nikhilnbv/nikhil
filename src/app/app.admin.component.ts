import { Component } from '@angular/core';
import { LoginService } from './services/loginService';
import { Router } from '@angular/router';
import { routes } from './services/app.router';
import {ElementRef,Renderer2} from '@angular/core';
//import './scripts/jquery-3.2.0.min.js';
//import './scripts/bootstrap.min.js';

//import './scripts/ui.core.js';

@Component({
    selector:'app-admin',
    template:`
                <!doctype html>
                <html>
                    <head>
                        <link href="bootstrap.min.css">
                        <link href="bootstrap-theme.min.css">
                        <style>
                            .app-header{
                                width:99.9%;
                                height:50px;
                                background-color: rgb(45, 62, 80);
                                border: 1px;
                                border-style: solid;
                                border-color: lightgrey;
                            }
                            .header-welcome-text{
                                float: left;
                                padding: 1%;
                                color: white;
                                font-weight: bold;
                                font-family: sans-serif;
                            }
                            .header-menu{
                                float: right;
                            }
                            .app-hero{
                                width:99.9%;
                                height:100px;
                                background-color:rgb(220, 233, 233);
                                border: 1px;
                                border-style: solid;
                                border-color: lightgrey;
                                border-bottom: 0px;
                            }
                            .hero-logo{
                                float: left;
                                width:25%;
                            }
                            .hero-text{
                                width:65%;
                                text-align: right;
                                float: left;
                                margin: 25px;
                                text-align: center;
                                font-family: sans-serif;
                                font-weight:bold;
                                font-size: 35px;
                                color: rgb(0, 149, 200);
                            }
                            .nav-links{
                                width:24.6%;
                                float: left;
                                height: 200px;
                                background-color:rgb(220, 233, 180);
                                border: 1px;
                                border-style: solid;
                                border-color: lightgrey;
                            }
                            .nav-content{
                                width:75.1%;
                                float: left;
                                height: 200px;
                                background-color:rgb(220, 233, 233);
                                border: 1px;
                                border-left: 0px;
                                border-style: solid;
                                border-color: lightgrey;
                            }
                        </style>
                        
                        <script type="text/javscript">
                            function loadFunction(){
                                console.log('hi..........................');
                                $('.dropdown-toggle').dropdown();
                            };

                            <!-- for desabling back button -->
                            function preventBack()
                            {
                                window.history.forward();
                            };
                            setTimeout("preventBack()",0);
                            window.onunload=function() {null};                           
                        </script>
                    </head>
                    <body (load)="loadFunction()">
                        

                        <section class="app-hero">
                            <img class="hero-logo" src="src/app/img/Logo_Cybage_5.png" />
                            <span class="hero-text">Training Management System</span>
                        </section>

                        <header class="app-header">
                            <div class="header-welcome-text">Welcome Admin</div>
                            <div class="header-menu">
                                <div class="dropdown">
                                    <a class="dropdown-toggle" id="dLabel" role="button" data-toggle="dropdown" data-target="" href="">
                                        Dropdown
                                        <b class="caret"></b>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a href="#" >Logout</a></li>
                                    </ul>
                                </div>
                                <button type="submit" (click)="logout()" >Logout</button>
                            </div>
                        </header>

                        <nav>
                            <div class="nav-links">
                                <span class="span-links"><button type="button" (click)="manageUserScreen()">Manage User</button></span><br>
                                <span class="span-links"><a href="" >Manage Training</a></span>
                            </div>
                            <div class="nav-content">
                                <div id="main-content"></div>
                            </div>
                        </nav>
                    </body>
                </html>



    `,
    providers:[LoginService],
    styleUrls: ['styles/bootstrap-theme.min.css','styles/bootstrap.min.css']
})

export class AdminComponent {

    constructor(private loginService : LoginService,private router: Router,private _elementRef : ElementRef) {
        
    }

    manageUserScreen(){
        this._elementRef.nativeElement.querySelector('.nav-content').innerHTML = 
        '<div class="accordion" id="accordion2">'+
            '<div class="accordion-group">'+
                '<div class="accordion-heading">'+
                '<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseOne">'+
                    'Collapsible Group Item 1</a>'+
                '</div>'+
                '<div id="collapseOne" class="accordion-body collapse in">'+
                '<div class="accordion-inner">'+
                    'Anim pariatur cliche...'+
                '</div>'+
                '</div>'+
            '</div>'+
            '<div class="accordion-group">'+
                '<div class="accordion-heading">'+
                '<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseTwo">'+
                    'Collapsible Group Item 2'+
                '</a>'+
                '</div>'+
                '<div id="collapseTwo" class="accordion-body collapse">'+
                '<div class="accordion-inner">'+
                    'Anim pariatur cliche...'+
                '</div>'+
                '</div>'+
            '</div>'+
        '</div>';
    }

    logout() { 
        console.log('calling logout');
        this.loginService.logout();
        this.router.navigate(['/login']);
    }
}