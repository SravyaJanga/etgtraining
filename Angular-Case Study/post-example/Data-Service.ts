import { Injectable } from "@angular/core";

import { HttpClient, HttpHeaders } from "@angular/common/http";

import { postData } from "./postdataObj";

@Injectable({

    providedIn:'root'

})

export class DataService{

    //postUrl:string="http://jsonplaceholder.typicode.com/posts";

    postUrl:string="http://localhost:8080/restgettask";
    httpoptions={

        headers:new HttpHeaders({

            'Content-Type':'application/json','Authorization':'my-auth-token'

        })

    };

    constructor(private httpClient:HttpClient)

    {

    }

        addPost(postD: postData)

        {

             return this.httpClient.post(this.postUrl,postD,this.httpoptions);

        }

    }