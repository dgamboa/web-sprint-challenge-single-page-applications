import React from "react";
import { Route } from 'react-router-dom';
import styled from 'styled-components';

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
    ul {
      border: 1px solid red; /* Delete */
      display: flex;
      justify-content: center;
      padding: 0;
      width: 23rem;
      li {
        border: 1px solid #333;
        display: inline-block;
        list-style: none;
        flex-grow: 1;
        text-align: center;
        line-height: 3rem;
        font-size: 1.5rem;
        &:hover {
          background-color: red;
          color: white;
          cursor: pointer;
        }
      }
    }
  }
`

const App = () => {
  return (
    <StyledHeader>
      <h1>Lambda Eats</h1>
      <nav className="site-nav">
        <ul>
          <li>Home</li>
          <li>Help</li>
        </ul>
      </nav>
    </StyledHeader>
  );
};
export default App;
