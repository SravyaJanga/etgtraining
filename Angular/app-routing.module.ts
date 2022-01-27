import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormValidation } from './FormValidation';
import { FormExample } from './FormExample';
import { Registration } from './Registration';
import { SearchStatusComponent } from './search-status/search-status.component';
import { TaskDetailsComponent } from './Task-details.component';
import { AssignTaskComponent } from './assign-task/assign-task.component';
import { Login } from './Login';
import{ TaskListComponent} from './task-list/task-list.component';
import { SetPriorityComponent } from './set-priority/set-priority.component';
import { SetBookmarkComponent } from './set-bookmark/set-bookmark.component';
import { CreatetaskComponent } from './createtask/createtask.component';

const routes: Routes = [
  {path:'',redirectTo:'Login',pathMatch:'full' },
  {path:'TemplateForm',component:FormExample},
  {path:'ModelForm',component:FormValidation},
  {path: 'Registration',component:Registration},
  {path:'Login',component:Login},
  {path:'tasks', component:TaskListComponent},
  {path:'setaskid',component: SearchStatusComponent},
  //{path:'assigntask', component:AssignTaskComponent},
  {path:'details/:taskId',component:TaskDetailsComponent},
  {path:'setpriority',component:SetPriorityComponent},
  {path:'bookmark',component:SetBookmarkComponent},
  {path:'assign',component: AssignTaskComponent},
  {path:'createtask' , component:CreatetaskComponent},



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }