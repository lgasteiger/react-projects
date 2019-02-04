/*************************************************************
 * Description: index.js - This JS file will be the main entry 
 *              point for the React app.
 * Date: 2019-02-03
 * Author: Leo Gasteiger
 *************************************************************/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function HelloSomebody() {
  const world = 'World';
  const name = 'Josh Perez';
  const headerElement = <h1>Hello, {world}!</h1>;
  const headerParaElement = <p>This Webpage will display example.</p> 
  const element2 = <h2>Hello, {name}!</h2>;
  const footerParaElement = <p>Last Updated: 2019-02-03</p>

  return (
    <div>
      <div className="header">
        {headerElement}
        {headerParaElement}
      </div>
      <div className="content">
        {element2}
      </div>
      <div className="footer">
        {footerParaElement}
      </div>
    </div>
  ); //end return
} //end HelloSomebody

// ==============================
ReactDOM.render(
  <HelloSomebody />,
  document.getElementById('root')
); //end ReactDOM.render
