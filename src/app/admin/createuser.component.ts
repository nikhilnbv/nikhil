import { Component, Injector } from '@angular/core';

@Component({
    selector: 'create-user-form',
    templateUrl: '../html/createUser.html'
})

export class CreateUserComponent{

    showNum = 0;

  constructor(private injector: Injector) {
    this.showNum = this.injector.get('showNum');
  }
  
  validateUserDetails(){
    console.log("Validate form..");  
  }

}
