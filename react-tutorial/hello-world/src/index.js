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

function getGreeting(person) {
  if (person) {
    return <h1>Hello {formatName(person)}!</h1>
  } else {
    return <h1>Hello stranger.</h1>
  } //end if
} //end getGreeting

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
    {getGreeting(user)}
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

function App() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
      <Toggle />
    </div>
  ); //end return
} //end App

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

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    ); //end return
  }// end render 
} //end Toggle

// ==============================
ReactDOM.render(
  /*
  <Comment author={favoriteAuthor}
           textComment={text}
           dateComment={new Date()}
  />,
  */

  <App />,
  document.getElementById('root')
); //end ReactDOM.render
