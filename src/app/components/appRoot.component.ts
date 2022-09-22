
import { Component, Inject } from "@angular/core";
import { ConsoleLoggerService } from "../services/consoleLogger.service";

@Component({
    templateUrl:"./appRoot.component.html",
    //<app-root></app-root>
    selector:'app-root'
})
export class AppRootComponent {
    constructor(@Inject("logger")loggerService:ConsoleLoggerService){
        loggerService.write("Approot component instaintes");
    }
}