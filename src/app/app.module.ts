import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRootComponent } from "./components/appRoot.component";
import { WidgetsModule } from "./widgets/widgets.module";

//decorators - Typescript building block, supports metadata programming
@NgModule({
    declarations:[AppRootComponent],
    imports:[BrowserModule, WidgetsModule],
    exports:[],
    providers:[],
    bootstrap:[AppRootComponent]
})
export class AppModule {

}