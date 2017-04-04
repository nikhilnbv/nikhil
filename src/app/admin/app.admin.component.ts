import { Component } from '@angular/core';
import { LoginService } from '../services/loginService';
import { Router } from '@angular/router';
import { routes } from '../services/app.router';
import {ElementRef,Renderer2} from '@angular/core';
import { CreateUserComponent } from './createuser.component';
import { UserDetailComponent } from './userdetail.component';
import { OnInit } from '@angular/core';

@Component({
    selector:'app-admin',
    templateUrl:'../html/template.html',
    providers:[LoginService],
    styleUrls:['../styles/template.css']
})

export class AdminComponent implements OnInit{

    constructor(private loginService : LoginService,private router: Router,private _elementRef : ElementRef) {
        
    }

    manageUserScreen(){
        this._elementRef.nativeElement.querySelector('.nav-content').innerHTML = 
        `

        <create-user-form></create-user-form>

        <existing-user-list></existing-user-list>
                    
        `;
    }

    manageTraining(){
        this._elementRef.nativeElement.querySelector('.nav-content').innerHTML = 
        `<div class="container" style="width:100%;padding-top:15px;">
            <div class="panel-group">
                <div class="panel panel-default">
                <div class="panel-heading">
                    <h4 class="panel-title">
                    <a data-toggle="collapse" data-target="#collapse1">Schedule Training</a>
                    </h4>
                </div>
                <div id="collapse1" class="panel-collapse collapse">
                    <div class="panel-body">

                    </div>
                </div>
                </div>
            </div>
        </div>

        <div class="container" style="width:100%;">
            <div class="panel-group">
                <div class="panel panel-default">
                <div class="panel-heading">
                    <h4 class="panel-title">
                    <a data-toggle="collapse" href="#collapse2">Training Details</a>
                    </h4>
                </div>
                <div id="collapse2" class="panel-collapse collapse">
                    <div class="panel-body">

                        <existing-user-list></existing-user-list>
                    
                    </div>
                </div>
                </div>
            </div>
        </div>`;
    }

    ngOnInit(){
        console.log('onInit event called..');
        //this._elementRef.nativeElement.querySelector('.dropdown-toggle').dropdown();
    }

    callMe(){
        console.log('btn clicked');
    }

    logout() { 
        console.log('calling logout');
        this.loginService.logout();
        this.router.navigate(['/login']);
    }
}
