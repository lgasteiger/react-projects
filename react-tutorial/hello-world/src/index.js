/*************************************************************
 * Description: index.js - This JS file will be the main entry 
 *              point for the React app.
 * Date: 2019-02-03
 * Author: Leo Gasteiger
 *************************************************************/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/* 
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
        <div>
        {headerParaElement}
        </div>
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
*/

function tick() {
  return (
    <div>
      <h1>{elementNameUrl}</h1>
      <h2>
        It is {new Date().toLocaleTimeString()}.
      </h2>
    </div>
  ); //end element
} //end tick

function getGreeting(user) {
  if (user) {
    return <h1>Hello {formatName(user)}!!</h1>
  } else {
    return <h1>Hello stranger.</h1>
  } //end if
} //end getGreeting

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
} //end formatName

const user = {
  firstName: 'Bryce',
  lastName: 'Harper',
  avatarUrl: 'https://www.mlb.com'
}; //end user

const elementFullName = (
  <h1 className="greeting">
    Hello {formatName(user)}
  </h1>
); //end elementFullName

const elementFirstName = (
  <div className="firstName" tabIndex="0">
    <h2>
      Hello {user.firstName}
    </h2>
  </div>
); //end elementFirstName

const elementNameUrl = (
  <div className="userInfo">
    {getGreeting(user)}
    <p className="avatarUrl">
      Avatar URL: {user.avatarUrl}
    </p>
  </div>
); //end elementNameUrl

function Welcome(props) {
  return (
    <h1>Hello {props.name}</h1>
  );
} //end Welcome

const elementWelcome = (
  <Welcome name="Sara" />
);

// ==============================
ReactDOM.render(
  elementWelcome,
  document.getElementById('root')
); //end ReactDOM.render

setInterval(tick, 1000);