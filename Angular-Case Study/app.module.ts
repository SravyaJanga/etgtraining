import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForExample} from "./ForExample";
import { FormsModule } from '@angular/forms';
import { IfExample } from './IfExample';
import { PipeExample } from './PipeExample';
import { ArrayExample } from './ArrayExample';
import { Validate } from './Validate';
import { CustomSortPipe } from './CustomSortPipe';
import { CustomDirectiveExample } from './CustomDirectiveExample';
import { MyOwnComponent } from './MyOwnComponent';
import {HttpClientModule } from '@angular/common/http';
import { EmployeeDetailsComponent } from './employee-details.component';
import { TaskDetailsComponent } from './Task-details.component';
import { FormExample } from './FormExample';
import { ReactiveFormsModule } from '@angular/forms';
import { FormValidation } from './FormValidation';
import { NewModule } from './NewModule';
import { Login } from './Login';
import { Registration } from './Registration';
import { PostExampleComponent } from './post-example/post-example.component';
import { PostCasestudyComponent } from './post-casestudy/post-casestudy.component';
import { SearchStatusComponent } from './search-status/search-status.component';
import { AssignTaskComponent } from './assign-task/assign-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { SearchPriorityComponent } from './search-priority/search-priority.component';
import { SetPriorityComponent } from './set-priority/set-priority.component';
import { SetBookmarkComponent } from './set-bookmark/set-bookmark.component';
import { SetNoteComponent } from './set-note/set-note.component';
import { CreatetaskComponent } from './createtask/createtask.component';




@NgModule({
  declarations: [
    AppComponent, 
    ForExample, 
    IfExample , 
    PipeExample, 
    ArrayExample, 
    Validate,
    CustomSortPipe, 
    CustomDirectiveExample,
    MyOwnComponent,
    EmployeeDetailsComponent,
    TaskDetailsComponent,
    FormExample,
    FormValidation,
  Login,
  Registration,
  PostExampleComponent,
  PostCasestudyComponent,
  SearchStatusComponent,
  AssignTaskComponent,
  TaskListComponent,
  SetPriorityComponent,
SearchPriorityComponent,
SetBookmarkComponent,
SetNoteComponent,
CreatetaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
