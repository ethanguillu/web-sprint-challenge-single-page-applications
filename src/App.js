import React, {useState} from "react";
import {Link, Route} from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'
import Form from './Components/Form'
import Home from './Components/Home'
import formSchema from './Validation/Schema'

const initialFormValues = {
  name:"",
  size:"",
  pepperoni:false,
  onions:false,
  chicken:false,
  peppers:false,
  pineapple:false,
  extraCheese:false,
  instructions:"",
}

const initialFormErrors = {
  name:"",
}

const initialOrders = []

const App = () => {
  const [orders, setOrders] = useState(initialOrders)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)


  const postNewOrder = (order) => {
    axios
    .post('https://reqres.in/api/users',order)
    .then((res) => {
      console.log(res);
      setOrders([...orders,res.data])
    })
    .catch((error) => {
      console.log('It broke:',error)
    })
    .finally(() => {
      setFormValues(initialFormValues)
    })
  }

  const onInputChange = (evt) => {
    const { name, value} = evt.target

    yup.reach(formSchema, name)
    .validate(value)
    .then(() => {
      setFormErrors({
        ...formErrors,
        [name]:"",
      })
    })
    .catch((error) => {
      setFormErrors({
        ...formErrors,
        [name]:error.errors[0],
      })
    })
    setFormValues({
      ...formValues,
      [name]:value,
    })
  }

  const onCheckboxChange = (evt) => {
    const {name,checked} = evt.target
    setFormValues({
        ...formValues,
        [name]: checked
    })
    console.log("formvalues", formValues)
  }

  const onSubmit = (evt) => {
    evt.preventDefault();

    const newOrder = {
      name:formValues.name,
      size:formValues.size,
      pepperoni:formValues.pepperoni,
      onions:formValues.onions,
      chicken:formValues.chicken,
      peppers:formValues.peppers,
      pineapple:formValues.pineapple,
      extraCheese:formValues.extraCheese,
      instructions:formValues.instructions
    }
    postNewOrder(newOrder)
  }

  return (
    <div className="App">
      <nav>
        <h1 className="title">BloomTech Eats</h1>
        <div>
          <Link className="navLink" to="/">
            Home
          </Link>
          <Link className="navLink" to="/pizza">
            Build your own 'za
          </Link>
        </div>
      </nav>
      <Route exact path="/" id="order-pizza">
        <Home />
      </Route>
      <Route path="/pizza">
        <Form id="pizza-form"
        values={formValues}
        onInputChange={onInputChange}
        onCheckboxChange={onCheckboxChange}
        onSubmit={onSubmit}
        errors={formErrors}/>
      </Route>
    </div>
  );
};
export default App;
