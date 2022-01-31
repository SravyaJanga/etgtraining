import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private baseUrl = "http://localhost:8090/restalltask";
  private baseUrl1 = "http://localhost:8090";
  constructor(private httpClient:HttpClient) { }

  getTaskList():Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }


  deleteTask(task_ID:number):Observable<any>{
    return this.httpClient.delete(`${this.baseUrl}/${task_ID}`,{responseType:'text'});
  }

  getTask(task_ID:number):Observable<any>{
    return this.httpClient.get(`http://localhost:8090/restgettask/${task_ID}`);
  }

  updateTask(task_ID:number,value:any):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${task_ID}`, value);
  }


  setaskid(task_ID:number):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/tak/${task_ID}`);
  }

  seepriority(priority:string):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/pri/${priority}`);
  }

  sename(name:string):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/nam/${name}`)
  }



searchByStatus(status:string): Observable<any> {

  return this.httpClient.get(`http://localhost:8090/status/${status}`);

}
validate(username: string,password:string): Observable<any> {



  return this.httpClient.get(`http://localhost:8090/user/${username}/${password}`);



}

  setpriority(taskId: number,priority:number): Observable<any> {
    return this.httpClient.get(`http://localhost:8090/assignpriority/${taskId}/${priority}`);
  }

  book(taskId:number, isbookmarked:String):Observable<Object>{

    return this.httpClient.get(`http://localhost:8090/assignbookmark/${taskId}/${isbookmarked}`);
  
  }
  note(taskId:number, notes:String):Observable<Object>{

    return this.httpClient.get(`http://localhost:8090/setNote/${taskId}/${notes}`);
  
  }
  assign(taskid:number,ownerid:number):Observable<Object>{

    return this.httpClient.get(`http://localhost:8090/updateownerid/${taskid}/${ownerid}`);
  
  }
  
  
  //function restaddtask(baseUrl1: string, restaddtask: any): Observable<Object> {
   // throw new Error('Function not implemented.');
  //}

  createTask(task:Object):Observable<Object>{
    return this.httpClient.post(`http://localhost:8090/restaddtask`,task);
  }
}

