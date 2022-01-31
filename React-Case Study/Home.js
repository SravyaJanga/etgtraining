import React from "react";

import{Link} from 'react-router-dom';

export default function Home()

{

    return(

        <div>

           

           

                    <nav class="navbar navbar-expand-lg navbar-light bg-light" >

        <div class="collapse navbar-collapse" id="navbarCollapse">

            <ul class="navbar-nav mr-auto">

             

           

            <li class="nav-link-active">

                <Link to="/TaskList" class="nav-link" > Get All Tasks</Link>

            </li>



            <li class="nav-item">

                <Link to="/CreateTaskComponent" class="nav-link" >Create Task</Link>

            </li>



           

            </ul>

            </div>

            </nav>

           

        </div>

   

    )

}