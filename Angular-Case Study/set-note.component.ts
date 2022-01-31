import { Component, OnInit } from '@angular/core';
import { TaskService } from '../TaskService';
import { Task } from '../Task';
import  { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-set-note',
  templateUrl: './set-note.component.html',
  styleUrls: ['./set-note.component.css']
})
export class SetNoteComponent implements OnInit {
  tasks:any;
  taskId!:number;
  notes!:String;
  task!:Task;

  constructor(private route:ActivatedRoute, private router:Router,
    private taskService:TaskService) { }

  ngOnInit(): void {
  }
  note():void{
    this.taskService.note(this.taskId, this.notes).
    subscribe(data=>console.log(data), error=>console.log(error));
    this.task = new Task();
    this.gotoList();
  }

  onSubmit(){
    this.note();
  }
  gotoList() {
    this.router.navigate(['/tasks'])
   
  }


}