import logo from './logo.svg';
import './App.css';
import CreateTaskComponent from './CreateTaskComponent';
import TaskList from './Components/TaskList';
import Login from './Login';
import React from 'react';

import { Routes,Route} from 'react-router';



import Home from './Home';



import {BrowserRouter as Router,Link} from 'react-router-dom';


function App() {
  return (
    <div>

    <Router>

 






<div className='container'>



  <Routes>



  <Route path='/' element={<Login/>}/>

  <Route path='/Home' element={<Home/>}/>

    <Route path='/TaskList' element={<TaskList/>}/>



    <Route path='/CreateTaskComponent' element={<CreateTaskComponent/>}/>



  </Routes>





</div>

</Router>

    </div>
  );
}

export default App;
