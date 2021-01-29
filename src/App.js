import React from "react";
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <header>
      <h1>Lambda Eats</h1>
      <nav className="site-nav">
        <ul>
          <li>Home</li>
          <li>Help</li>
        </ul>
      </nav>
    </header>
  );
};
export default App;
