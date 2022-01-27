
import { Component } from "@angular/core";
import { MyService } from "./MyService";

@Component({
    selector:'my-own-com',
    template:`
    <div>
    userName:<input type ="text" name="t1"/><br>
    password:<input type ="text" name="t2"/><br>
    <button type = "submit">Login</button>
    <p>{{show}}</p>
    </div>
    `,
    providers:[MyService]
})

export class MyOwnComponent{

    show: string;
    constructor(my:MyService){
    this.show = my.getName();
    }
}