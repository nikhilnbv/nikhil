import { Component, Injector, ElementRef } from '@angular/core';
import { UserService } from '../services/userService';

import '../scripts/jquery-3.2.0.min.js';
import '../scripts/bootstrap-3.3.7.min.js';
import '../scripts/formValidation.js';
import '../scripts/validator.js';

@Component({
    selector: 'create-user-form',
    templateUrl: '../html/createUser.html'
})

export class CreateUserComponent{

    showNum = 0;
    model : any = {};
    userData : any;
    users : any[] = [];

  constructor(private injector: Injector, private userService : UserService, private _elementRef : ElementRef) {
    this.showNum = this.injector.get('showNum');
  }
  
  validateUserDetails(){
    console.log("Validate form.."); 
    //if(this._elementRef.nativeElement.querySelector('#txtFirstName')){} 
  }

  createUser(){
        this.userData = {
                'userName' : this.model.userName,
                'password' : this.model.password,
                'firstName' : this.model.firstName,
                'lastName' : this.model.lastName,
                'role' : this.model.role
            }
            
        this.userService.createUser(this.userData).subscribe(
      			data => { console.log(data);
            console.log(data.affectedRows)},
			      err => console.error(err),
			      () => console.log('success..')
		  );
    }

    viewUsers(){
      console.log("inside viewUser");

      this.userService.viewUsers().subscribe(
      			data => { console.log(data);
            this.users = data;            
          },
			      err => console.error(err),
			      () => console.log('success..')
		  );
    }
}
