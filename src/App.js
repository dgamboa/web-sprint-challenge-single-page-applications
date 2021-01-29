import React from "react";
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home';
import Form from './components/Form';

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

const App = () => {
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

      <Route path='/pizza' component={Form}/>
      {/* <Route path='/confirmation'/> */}
    </div>
  );
};
export default App;
