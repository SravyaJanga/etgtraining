import { Component, OnInit } from '@angular/core';
import { DataService } from './Data-Service';
import { postData} from './postdataObj';


@Component({
  selector: 'app-post-example',
  templateUrl: './post-example.component.html',
  styleUrls: ['./post-example.component.css']
})
export class PostExampleComponent implements OnInit {
data:string | undefined;
posData:postData | undefined;
public users:any = [];
  constructor( private dataService: DataService) { }

  ngOnInit() {
  }
sendData(){
  this.posData = new postData();
  this.posData.body = "test data2";
  this.posData.title = "some Title";
  this.posData.userId = 13;
  this.dataService.addPost(this.posData)
  .subscribe(data => {console.log(data)});
}
}
