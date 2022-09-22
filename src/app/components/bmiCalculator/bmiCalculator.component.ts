import { Component } from "@angular/core";


@Component({
    selector: "bmi-calc-comp",
    templateUrl: "./bmi.component.html"
})
export class BMICalculatorComponent {

    height: number = 0;
    weight:number = 0;
    bmi:number = 0;

    calculateBMI(){
        this.bmi = this.height * this.weight ;
    }

    clear(){
        this.height = 0;
        this.weight = 0;
        this.bmi = 0;
    }

    onWeightEdit(weightValue:string){
        this.weight= parseInt(weightValue);
    }

    onHeightEdit(heightValue:string){
        this.height= parseInt(heightValue);
    }
}