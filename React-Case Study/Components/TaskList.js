import React,{useEffect, useState}from 'react';
import TaskServices from '../Services/TaskServices';

const TaskList = () => {
   const [task,tasks] = useState([])
  useEffect(() => {
    TaskServices.getAllTaks().then((response) =>{
        tasks(response.data)
        console.log(response.data);
    }).catch(error=>{
        console.log(error);
  })
},[])

   return (
  <div className="container">
      <h2 className="text-center">all task lists</h2>
      <table className='table table-bordered table-striped'>
         
<thead>

     <th>TaskId</th>
    <th>TaskName</th>
    <th>CreatorId</th>
    <th>OwnerId</th>
    
    <th>Description</th>
    <th>Satus</th>
    <th>Priority</th>
    <th>Notes</th>
    <th>BookMark</th>   
    <th>CreatedOn</th>  
    <th>ModifiedOn</th>   
       

</thead>
          <tbody>
              {
                  task.map(
                      task =>
                      <tr>
                           <td>{task.taskId}</td>
                          <td>{task.name}</td> 
                       <td>{task.creatorId}</td>
                        <td>{task.ownerId}</td>
             <td>{task.description}</td>
             <td>{task.status}</td>
             <td>{task.priority}</td>
             <td>{task.notes}</td>
             <td>{task.isBookmarked}</td>
        
             <td>{task.createdOn}</td>
             <td>{task.modifiedOn}</td>
                        
                      </tr>
                  )
              }
          </tbody>
      </table>
  </div>
  )
};

export default TaskList;