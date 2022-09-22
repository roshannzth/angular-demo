import { Component } from "@angular/core";
import { BmiInputModel } from "src/app/models/bmiInput.model";
import { BmiCalculatorService } from "src/app/services/bmiCalculator.service";


@Component({
    selector: "bmi-calc-comp",
    templateUrl: "./bmi.component.html"
})
export class BMICalculatorComponent {

    calcService:BmiCalculatorService;
    bmiResult:number = 0;

    constructor(service:BmiCalculatorService){
        this.calcService = service;
    }

    calculateBMI(data:BmiInputModel){
        this.bmiResult = this.calcService.calculateBMI(data);
    }
}