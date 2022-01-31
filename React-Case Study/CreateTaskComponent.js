import React, { Component } from "react";
import axios from "axios";


class CreateTaskComponent extends Component{
    constructor(props){
        super(props)
    this.state ={
        taskId:'',
        ownerId:'',
        creatorId:'',
        name:'',
        status:'',
        description:'',
        priority:'',
        notes:'',
        modifiedOn:'',
        isBookmarked:'',
        createdOn:''
  }
}



render(){
    const{taskId,ownerId,creatorId,name,status,description,priority,notes,modifiedOn,isBookmarked,createdOn} = this.state
    return(
        <div style={{textAlign:"center"}}>
             
            <h2>Create Task</h2>
            <form onSubmit={this.submitHandler}>
                <div>
                    TaskID:
                    <input type="number"
                    name="taskId"
                    value={taskId}
                    onChange={this.changeHandler}
                    />
                </div>
                <div>
                    Owner ID:
                    <input type="number"
                    name="ownerId"
                    value={ownerId}
                    onChange={this.changeHandler}
                    />
                </div>

                <div>
                    Creator ID:
                    <input type="number"
                    name="creatorId"
                    value={creatorId}
                    onChange={this.changeHandler}
                    />
                    </div>
                    <div>
                    name:
                    <input type="text"
                    name="name"
                    value={name}
                    onChange={this.changeHandler}
                    />
                    </div>
                
                     <div>
                    status:
                    <input type="text"
                    name="status"
                    value={status}
                    onChange={this.changeHandler}
                    />
                    </div>

                    <div>
                    Description:
                    <input type="text"
                    name="description"
                    value={description}
                    onChange={this.changeHandler}
                    />
                    </div>
                     <div>
                    priority:
                    <input type="number"
                    name="priority"
                    value={priority}
                    onChange={this.changeHandler}
                    />
                    </div>
                    <div>
                    Notes:
                    <input type="text"
                    name="notes"
                    value={notes}
                    onChange={this.changeHandler}
                    />
                    </div>
                    <div>
                    isBookmarked:
                    <input type="text"
                    name="isBookmarked"
                    value={isBookmarked}
                    onChange={this.changeHandler}
                    />
                    </div>

                    <div>
                    CreatedOn:
                    <input type="date"
                    name="createdOn"
                    value={createdOn}
                    onChange={this.changeHandler}
                    />
                    </div>

                    <div>
                    modifiedOn:
                    <input type="date"
                    name="modifiedOn"
                    value={modifiedOn}
                    onChange={this.changeHandler}
                    />
                    </div>


                    
                <button type="submit">Submit</button>
               
            </form>
        </div>
        
    )

}
changeHandler=(e)  =>{
    this.setState({
        [e.target.name]: e.target.value
    })
}
submitHandler = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8090/restaddtask', this.state)
    .then(response => {
        console.log(response)
    })
}
}
export default CreateTaskComponent