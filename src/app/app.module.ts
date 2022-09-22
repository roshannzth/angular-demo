import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRootComponent } from "./components/appRoot.component";
import { BmiCalculatorService } from "./services/bmiCalculator.service";
import { ConsoleLoggerService } from "./services/consoleLogger.service";
import { WidgetsModule } from "./widgets/widgets.module";

//decorators - Typescript building block, supports metadata programming
@NgModule({
    declarations:[AppRootComponent],
    imports:[BrowserModule, WidgetsModule],
    exports:[],
    providers:[
      {/* token */ provide:BmiCalculatorService, useClass: BmiCalculatorService},
      {provide:"logger", useClass: ConsoleLoggerService}
    ],
    bootstrap:[AppRootComponent]
})
export class AppModule {

}