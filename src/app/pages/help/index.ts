import { Component, OnInit } from "@angular/core";

@Component({
    selector: "help",
    templateUrl: "./index.html",
    styleUrls: ['./index.scss']
})
export class Help implements OnInit {
    constructor() { }

    ngOnInit() {
        console.log("Hello Help");
    }
}