import React, {useState} from "react";
import {Link, Route} from 'react-router-dom'
import Home from './Components/Home'
import Form from './Components/Form'
// import formSchema from './Validation/Schema'
// import * as yup from 'yup'

const App = () => {

  
 
  return (
    <div>
      <nav>
      <h1 className="title">Bloomtech Eats</h1>
      <div>
          <Link className="navLink" to="/">
            Home
          </Link>
          <Link className="navLink" to="/pizza">
            Build your own pizza
          </Link>
          <Route exact path="/" id="order-pizza">
            <Home />
          </Route>
          <Route>
            <Form />
          </Route>

        </div>
      
      </nav>
    </div>
  );
};
export default App;
