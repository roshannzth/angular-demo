import { Component } from "@angular/core";
import { BmiInputModel } from "src/app/models/bmiInput.model";


@Component({
    selector: "bmi-calc-comp",
    templateUrl: "./bmi.component.html"
})
export class BMICalculatorComponent {

    bmiResult:number = 0;

    calculateBMI(data:BmiInputModel){
        this.bmiResult = data.height * data.weight ;
    }
}