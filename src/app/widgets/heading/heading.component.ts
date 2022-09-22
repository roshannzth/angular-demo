
import { Component, Input } from "@angular/core";

@Component({
    //templateUrl:"./heading.component.html",
    //<app-root></app-root>
    selector:'heading-component',
    template: `<h1>{{message}}</h1>`
})
export class HeadingComponent {

    @Input()
    message:string=""
}