import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BmiInputModel } from 'src/app/models/bmiInput.model';

@Component({
  selector: 'app-bmi-input',
  templateUrl: './bmi-input.component.html',
  styleUrls: ['./bmi-input.component.css']
})
export class BmiInputComponent implements OnInit {

  height:number = 0;
  weight:number = 0;
@Output()
  inputAvailableEvent = new EventEmitter<BmiInputModel>();
  constructor() { }

  ngOnInit(): void {
  }

  onHeightEdit(height:string){
    this.height = parseInt(height);
  }

  onWeightEdit(weight:string){
    this.weight = parseInt(weight);
  }

  calculateBMI(){
    //callback container component
    const data = new BmiInputModel(this.height, this.weight);
    this.inputAvailableEvent.emit(data);

  }

  clear(){
    this.height = 0;
    this.weight = 0;
    const data = new BmiInputModel(this.height, this.weight);
    this.inputAvailableEvent.emit(data);
  }
}
