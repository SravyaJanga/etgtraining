import axios from 'axios'
const TaskApi='http://localhost:8090/restalltask';
class TaskServices{
    getAllTaks()
    {
        return axios.get(TaskApi)


    }

    login(username,password){

        return axios.get('http://localhost:8090/user'+'/'+username+'/'+password)

    }
}
export default new TaskServices();