import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: "./index.html",
    styleUrls: ['./index.scss']
})
export class Home implements OnInit {
    constructor() { }

    ngOnInit() {
        console.log("Hello Home");
    }
}