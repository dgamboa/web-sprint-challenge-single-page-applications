import React, { useEffect, useState } from "react";
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home';
import Form from './components/Form';
import * as yup from 'yup';
import schema from './validation/formSchema';
import axios from 'axios';

const StyledHeader = styled.header`
  border: 1px solid black; /* Delete */
  display: flex;
  justify-content: space-between;
  height: 8rem;
  h1 {
    border: 1px solid black; /* Delete */
    color: red;
    font-size: 2.5rem;
    margin: auto 2rem;
    text-transform: uppercase;
  }
  nav {
    border: 1px solid black; /* Delete */
    display: flex;
    align-items: center;
    a {
      border: 1px solid #333;
      text-decoration: none;
      color: black;
      width: 12rem;
      text-align: center;
      line-height: 3rem;
      font-size: 1.5rem;
      &:hover {
        background-color: red;
        color: white;
      }
    }
  }
`

// Initial States:
const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  sausage: false,
  bacon: false,
  pineapple: false,
  garlic: false,
  mushrooms: false,
  peppers: false,
  cranberries: false,
  instructions: '',
}

const initialFormErrors = {
  name: '',
  size: '',
  toppings: ''
}

const initialDisabled = true;

const App = () => {
  // State Hooks:
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  // Submit Pizza Order Function
  const submitNewOrder = (order) => {
    // Execute post request
    // If post request is successful,
    // display the confirmation route with order details
    axios.post()
  };

  // Validation Helper for Errors:
  const validate = (name, value) => {
    yup.reach(schema, name).validate(value)
      .then(valid => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(e => setFormErrors({ ...formErrors, [name]: e.errors[0] }))
  }

  // Helper Functions
  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      pepperoni: formValues.pepperoni,
      sausage: formValues.sausage,
      bacon: formValues.bacon,
      pineapple: formValues.pineapple,
      garlic: formValues.garlic,
      mushrooms: formValues.mushrooms,
      peppers: formValues.peppers,
      cranberries: formValues.cranberries,
      instructions: formValues.instructions.trim()
    }
    submitNewOrder(newOrder);
  };

  // Effects Hook:
  useEffect(() => {
    schema.isValid(formValues).then(valid => {
      setDisabled(!valid);
    });
  }, [formValues])

  return (
    <div className="container">
      <StyledHeader>
        <h1>Lambda Eats</h1>
        <nav className="site-nav">
          <Link to='/'>Home</Link>
          <Link to='/'>Help</Link>
        </nav>
      </StyledHeader>

      <Route exact path='/' component={Home}/>

      <Route path='/pizza'>
        <Form
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
        />
      </Route>
      {/* <Route path='/confirmation'/> */}
    </div>
  );
};
export default App;
