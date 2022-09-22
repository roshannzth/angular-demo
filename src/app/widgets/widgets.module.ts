import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BMICalculatorComponent } from "../components/bmiCalculator/bmiCalculator.component";
import { HeadingComponent } from "./heading/heading.component";

//decorators - Typescript building block, supports metadata programming
@NgModule({
    declarations:[HeadingComponent, BMICalculatorComponent],
    imports:[BrowserModule],
    exports:[HeadingComponent, BMICalculatorComponent],
    providers:[]
})
export class WidgetsModule {

}