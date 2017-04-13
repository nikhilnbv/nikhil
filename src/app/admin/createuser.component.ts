import { Component, Injector, ElementRef } from '@angular/core';

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

  constructor(private injector: Injector, private _elementRef : ElementRef) {
    this.showNum = this.injector.get('showNum');
  }
  
  validateUserDetails(){
    console.log("Validate form.."); 
    //if(this._elementRef.nativeElement.querySelector('#txtFirstName')){} 
  }

}
