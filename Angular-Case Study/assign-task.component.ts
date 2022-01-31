import { Component, OnInit } from '@angular/core';
import { TaskService } from '../TaskService';

import  { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../Task';
@Component({
  selector: 'app-assign-task',
  templateUrl: './assign-task.component.html',
  styleUrls: ['./assign-task.component.css']
})
export class AssignTaskComponent implements OnInit {
  tasks:any;
  taskId!:number;
  ownerId!:number;
  task!:Task;

  constructor(private route:ActivatedRoute, private router:Router,
    private taskService:TaskService) { }

  ngOnInit(): void {
  }


  assign(){
    this.taskService.assign(this.taskId, this.ownerId).
    subscribe((data: any)=>console.log(data), (error: any)=>console.log(error));
    this.task = new Task();
    this.gotoList();
  }
   onSubmit(){
    this.assign();
  }
  gotoList() {
    this.router.navigate(['/tasks'])
   
  }

}