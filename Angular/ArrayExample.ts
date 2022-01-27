import {  Component } from "@angular/core";

@Component({
    selector: "list-com",
    templateUrl: "./ArrayExample.html"
})

export class ArrayExample{
    list = [
       {"id":1,"Name": "Junisha","Place":"Nsp"},
       {"id":2,"Name": "Anitha","Place":"Palakollu"},
       {"id":3,"Name": "Bhavani","Place":"Rjy"}
    ];
}