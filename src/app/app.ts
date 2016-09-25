import { Component, OnInit } from "@angular/core";
import "../style/app.scss";

@Component({
    selector: "app",
    templateUrl: "./app.html",
})
export class App implements OnInit {

    constructor() { }

    ngOnInit() {
        console.log("Hello App");
    }
}
