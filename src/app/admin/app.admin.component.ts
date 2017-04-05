import { Component } from '@angular/core';
import { LoginService } from '../services/loginService';
import { Router } from '@angular/router';
import { routes } from '../services/app.router';
import { ElementRef, Renderer, Input, ViewContainerRef, ViewChild, ReflectiveInjector, ComponentFactoryResolver} from '@angular/core';
import { CreateUserComponent } from './createuser.component';
import { UserDetailComponent } from './userdetail.component';
import { CreateTrainingComponent } from './createTraining.component';
import  DynamicComponent  from '../app.dynamic.component';
import { OnInit } from '@angular/core';
//import {BrowserModule} from '@angular/platform-browser'

@Component({
    selector:'app-admin',
    templateUrl:'../html/template.html',
    // Reference to the components must be here in order to dynamically create them
    entryComponents: [CreateUserComponent, CreateTrainingComponent], 
    providers:[LoginService],
    styleUrls:['../styles/template.css']
})

export class AdminComponent implements OnInit{

    componentData = null;

    constructor(private loginService : LoginService,private router: Router,private _elementRef : ElementRef,
    private resolver: ComponentFactoryResolver) {
        
    }

    manageUserScreen(){
        this.componentData = {
            component: CreateUserComponent,
             inputs: {
                showNum: 9
            }        
        };
    }

    manageTraining(){
       // this._elementRef.nativeElement.querySelector('.nav-content').innerHTML = 
       this.componentData = {
            component: CreateTrainingComponent,
             inputs: {
                showNum: 9
            }        
        };
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
