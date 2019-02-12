/*************************************************************
 * Description: index.js - This JS file will be the main entry 
 *              point for the React app.
 * Date: 2019-02-09
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

/*
function tick1() {
  return (
    <div>
      <h1>{elementNameUrl}</h1>
      <h2>
        It is {new Date().toLocaleTimeString()}.
      </h2>
    </div>
  ); //end element
} //end tick1
*/

/****************************
 * Introducing JSX Examples *
 ****************************/

function formatName(person) {
  return person.firstName + ' ' + person.lastName;
} //end formatName

const user = {
  firstName: 'Bryce',
  lastName: 'Harper',
  avatarUrl: 'https://www.mlb.com',
  avatarImg: '/Users/testuser55/Downloads/data-science/DATA-MINING1.png'
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
    {formatName(user)}
    <p className="avatarUrl">
      Avatar URL: {user.avatarUrl}
    </p>
  </div>
); //end elementNameUrl

function Welcome(props) {
  return (
    <h1>Hello {props.name}</h1>
  ); //end return
} //end Welcome

const elementWelcome = (
  <Welcome name="Sara" />
);

const favoriteAuthor = {
  firstName: 'Sean',
  lastName: 'Carroll',
  avatarUrl: './images/Google-AI-gives-birth.jpg'
}; //end author

const text = (
  <p>Prof. Carroll is a great writer and lecturer.</p>
); //end text

function formatCurrentDate(currentDate) {
  return (
    currentDate.toLocaleTimeString()
  ); //end return
} //end formatCurrentDate

/*********************************
 * Components and Props Examples *
 *********************************/

function Avatar(props) {
  return (
    <img className="Avatar" 
         src={props.user.avatarUrl}
         alt={formatName(props.user)}
    />
  ); //return
} //end Avatar

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.userInfo} />
      <div className="UserInfo-name">
        {formatName(props.userInfo)}
      </div>
    </div>
  ); //end return
} //end UserInfo

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo userInfo={props.author} />
      <div className="Comment-text">
        {props.textComment}
      </div>
      <div className="Comment-date">
        {formatCurrentDate(props.dateComment)}
      </div>
    </div>
  ); //end return
} //end Comment

/********************************
 * State and Lifecycle Examples * 
 ********************************/

function tick2() {
  return (
    <Clock currentDate={new Date()} />
  ) //end return
} //end tick2

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentDate: new Date()};
  } //end constructor

  componentDidMount() {
    this.timerID = setInterval( 
      () => this.tick(), 1000
    ); //end this.timerID
  } //end componentDidMount

  componentWillUnmount() {
    clearInterval(this.timerID);
  } //end componentWillUnmount

  tick() {
    this.setState({
      currentDate: new Date()
    }); //end this.setState
  } //end tick
  
  render() {
    return (
      <div>
        <h1>{elementNameUrl}</h1>
        <h2>
          It is {this.state.currentDate.toLocaleTimeString()}.
        </h2>
      </div>
    ); //end return
  } //end render
} //end Clock

function App() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
      <Toggle text="Here is the current state=>"/>
    </div>
  ); //end return
} //end App

/****************************
 * Handling Events Examples *
 ****************************/

class ActionLink extends React.Component {
  formatCurrentDateTime() {
    return (
      (new Date()).toLocaleString()
    ); //end return
  } //end formatCurrentDateTime

  handleClick = (
    (e) => {
      e.preventDefault();
      console.log('**********The link was clicked**********');
    } //end ()
  ); //end handleClick

  render() {
    return (
      <div>
        <section id="heading">
          <h1>Action Link Example</h1>
          <p>
            This Webpage will display an example of a synthetic event
            with a callback function (class method).
          </p>
        </section>
        <section id="content">
          <a href="#" onClick={this.handleClick}>
            Action Link Example
          </a>
        </section>
        <footer>
          <p>
            Last Updated: {this.formatCurrentDateTime()}
          </p>
        </footer>
      </div>
    ); //end return
  } //end render
} //end ActionLink

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    }; //end this.state
    this.handleClick = this.handleClick.bind(this);
  } //end constructor

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    })); //end this.setState
  } //end handleClick

  decideOptions() {
    if (this.state.isToggleOn) {
      return ("the switch is turned ON.");
    }
    return ("the switch is definitely turned OFF.");
  } //end decideOptions

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        <div>
          {this.props.text} {this.decideOptions()}
        </div>
      </div>
    ); //end return
  }// end render 
} //end Toggle

class LoggingButtonPublicClass extends React.Component {
  handleClick = (
    () => {
      console.log('this is:', this);
    } //end ()
  ); //end handleClick

  render() {
    return (
      <div className="BindingPublicClass">
        <h1>Logging Button Public Class Example</h1>
        <p>
          This Webpage will show an example of binding the handleClick
          callback function (class method) to the class using public
          class fields.
        </p>
        <p>
        <button onClick={
          this.handleClick
        }>
          Binding with Public Class Fields
        </button>
        </p>
      </div>
    ); //end return
  } //end render
} //end LoggingButtonPublicClass

class LoggingButtonArrowFunction extends React.Component {
  handleClick = (
    () => { 
      console.log('this is:', this);
    } //end ()
  ); //end handleClick
  
  render() {
    return (
      <div className="BindingArrowFunction">
        <h1>Logging Button Arrow Function Example</h1>
        <p>This Webpage will show an example of binding the handleClick
           clallback function (class method) to the class using an arrow
           function.
        </p>
        <button onClick={
          (e) => this.handleClick(e)
        }>
          Binding with Arrow Functions
        </button>
      </div>
    ); //end return
  } //end render
} //end LoggingButtonArrowFunction

class MethodsBindingExamples extends React.Component {
  render() {
    return (
      <div>
        <LoggingButtonPublicClass />
        <LoggingButtonArrowFunction />
      </div>
    ); //end return
  } //end render
} //end MethodsBindingExamples

/**********************************
 * Conditional Rendering Examples *
 **********************************/

function UserGreeting(props) {
  return (
    <div>
      <section id="heading">
        <h1>Conditional Rendering Examples</h1>
        <p>
          This Webpage will show examples of conditional rendering.
        </p>
      </section>
      <section id="content">
        <h1>
          Welcome back {props.username}!!
        </h1>
      </section>
      <footer>
        <figure>
          <figcaption>
            <a href="https://reactjs.org">React JS Info</a>
          </figcaption>
        </figure>
        <p>
          Last Updated: {(new Date()).toLocaleString()}
        </p>
      </footer>
    </div>
  ); //end return
} //end UserGreeting

function GuestGreeting(props) {
  return (
    <div>
      <section id="heading">
        <h1>Conditional Rendering Examples</h1>
        <p>
          This Webpage will show examples of conditional rendering.
        </p>
      </section>
      <section id="content">
        <h1>
          Please sign up, when you get a chance, {props.newest}!
        </h1>
      </section>
      <footer>
        <figure>
          <figcaption>
            <a href="https://reactjs.org">React JS Info</a>
          </figcaption>
        </figure>
        <p>
          Last Updated: {(new Date()).toLocaleString()}
        </p>
      </footer>
    </div>
  );
} //end GuestGreeting

function GetGreeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return (
      <UserGreeting username={user.firstName} />
    ); //end return
  } //end if
  
  return (
    <GuestGreeting newest="newest player" />
  ); //end return
} //end getGreeting

/*
 * Element Variables Example
 */
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  ); //end return
} //end LoginButton

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  ); //end LogoutButton
} //end LogoutButton

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  } //end constructor

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  } //end handleLoginClick

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  } //handleLogoutClick

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    } //end if

    return (
      <div>
        <GetGreeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    ); //end return
  } //end render
} //end LoginControl

/**
 * Inline If with Logical && Operator
 */


// ==============================
ReactDOM.render(
  /*
  <Comment author={favoriteAuthor}
           textComment={text}
           dateComment={new Date()}
  />,
  */

  <LoginControl />,
  document.getElementById('root')
); //end ReactDOM.render
