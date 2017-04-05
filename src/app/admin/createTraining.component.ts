import { Component, Injector } from '@angular/core';

@Component({
    selector: 'create-training',
    templateUrl:'../html/createTraining.html'
})

export class CreateTrainingComponent{
    showNum = 0;

  constructor(private injector: Injector) {
    this.showNum = this.injector.get('showNum');
  }
}
