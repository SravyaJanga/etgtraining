import {  Component } from "@angular/core";

@Component({
    selector: "pipe-com",
    templateUrl: "./PipeExample.html"
})

export class PipeExample{
    name = "SONATA";
    day = new Date();
    arr =[10,30,40,20,50];
    price = 500;
}