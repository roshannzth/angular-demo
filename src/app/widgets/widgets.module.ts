import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BMICalculatorComponent } from "../components/bmiCalculator/bmiCalculator.component";
import { HeadingComponent } from "./heading/heading.component";
import { BmiInputComponent } from '../components/bmi-input/bmi-input.component';
import { BmiResultComponent } from '../components/bmi-result/bmi-result.component';

//decorators - Typescript building block, supports metadata programming
@NgModule({
    declarations:[HeadingComponent, BMICalculatorComponent, BmiInputComponent, BmiResultComponent],
    imports:[BrowserModule],
    exports:[HeadingComponent, BMICalculatorComponent],
    providers:[]
})
export class WidgetsModule {

}