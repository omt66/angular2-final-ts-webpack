import { Component, OnInit } from '@angular/core';

@Component({
    selector: "simple-panel",
    templateUrl: "./index.html",
    styleUrls: ["./index.scss"]
})
export class SimplePanel implements OnInit {
    constructor() { }

    ngOnInit() {
        console.log("Hello SimplePanel");
    }
}