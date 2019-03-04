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
    
    /*
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    } //end if
    */

    //Inline If-Else with Conditional Operator example 
    isLoggedIn ? (button = <LogoutButton onClick={this.handleLogoutClick} />) :
                 (button = <LoginButton onClick={this.handleLoginClick} />);

    return (
      <div>
        <GetGreeting isLoggedIn={isLoggedIn} />
        {button}
        <div>
          The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
        </div>
      </div>
    ); //end return
  } //end render
} //end LoginControl

/**
 * Inline If with Logical && Operator
 */
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <section id="heading">
        <h1>Inline If with Logical && Operator</h1>
        <p>
          This Webpage will show an example of using the inline if
          statement with the logical && operator 
        </p>
      </section>
      <section id="content">
        <h1>Hello!</h1>
        {unreadMessages.length > 0 &&
          <h2>
            You have {unreadMessages} unread messages.
          </h2>
        }
      </section>
      <footer>
        <p>
          Last Update: {(new Date()).toLocaleString()}
        </p>
      </footer>
    </div>
  ); //end return
} //end Mailbox

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  } //end if
  
  return (
    <div className="warning">
      Warning!
    </div>
  ); //end return
} //end WarningBanner

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  } //end constructor

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    })); //end this.setState
  } //end handleToggleClick

  render() {
    return (
      <div>
        <section id="heading">
          <h1>Preventing Components from Rendering</h1>
          <p>This Webpage will show an example of preventing 
            components from rendering.
          </p>
        </section>
        <section id="content">
          <h2>
            <WarningBanner warn={this.state.showWarning} />
          </h2>
          <button onClick={this.handleToggleClick}>
            {this.state.showWarning ? 'Hide' : 'Show'}
          </button>
        </section>
        <footer>
          <p>
            Last Updated: {(new Date()).toLocaleString()}
          </p>
        </footer>
      </div>
    ); //end return
  } //end render
} //end Page

/**************************
 * List and Keys Examples *
 **************************/

function ListItem(props) {
  const value = props.value;
  return (
    <li>{value}</li>
  ); //end return
} //end ListItem

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map(
    (number) => <ListItem value={number}
                          key={number.toString()}
                />
  ); //end listItems

  return (
    <div>
      <section id="heading">
        <h1>Rendering Multiple Components Example</h1>
        <p>This Webpage will show examples of rendering mulitple
           components.</p>
      </section>
      <section id="content">
        <ul>{listItems}</ul>
      </section>
      <footer>
        <p>
          Last Updated: {(new Date()).toLocaleString()}
        </p>
      </footer>
    </div>
  ); //end return
} //end NumberList

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map(
        (post) => <li key={post.id}>
                    {post.title} ({post.id})
                  </li>
      )}
    </ul>
  ); //end sidebar

  const content = props.posts.map(
    (post) => <div key={post.id}>
                <h3>({post.id}) x{post.title}</h3>
                <p>{post.content}</p>
              </div>
  ); //end content

  return (
    <div>
      <section id="heading">
        <h1>Keys Must Only Be Unique Amoung Siblings Example</h1>
        <p>This Webage will display an example of unique keys amoung
           siblings.
        </p>
      </section>
      <section id="content">
        {sidebar}
        <hr />
        {content}
      </section>
      <footer>
        <p>
          Last Updated: {(new Date()).toLocaleString()}
        </p>
      </footer>
    </div>
  ); //end return
} //end Blog

/*********
 * Forms *
 *********/

/**
 * Controlled Components
 */

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }; //end this.state
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  } //end constructor

  handleChange(event) {
    this.setState({
      value: event.target.value.toUpperCase()
    }); //end this.setState
  } //end handleChange

  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.value);
    console.log('A name was submitted: ' + this.state.value);
    event.preventDefault();
    this.setState({
      value: ''
    }); //end this.setState
  } //end handleSubmit

  render() {
    return (
      <div>
        <section id="heading">
          <h1>Forms</h1>
          <p>
            This Webpage will display examples of forms implementation 
            logic.
          </p>
        </section>
        <section id="content">
          <h2>Controlled Components Example</h2>
          <form onSubmit={this.handleSubmit}>
            <fieldset>
              <legend>User Info</legend>
              <p>
                <label htmlFor="fullName">Name:</label>
                <input type="text" 
                       id="fullName" 
                       className="fullName"
                       value={this.state.value}
                       onChange={this.handleChange}
                       autoFocus={true}
                />
              </p>
              <p>
                <input type="submit" value="Submit" />
              </p>
            </fieldset>
          </form>
        </section>
        <footer>
          <p className="reactInfo">
            <a href="https://reactjs.org">
              React JS Info
            </a>
          </p>
          <p className="lastUpdated">
            Last Updated: {(new Date()).toLocaleString()}
          </p>
        </footer>
      </div> 
    ); //end return
  } //end render
} //end NameForm

/**
 * Textarea Tag Example
 */

class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.'
    }; //end this.state
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  } //end constructor

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  } //end handleChange

  handleSubmit(event) {
    //alert('An essay was submitted: ' + this.state.value);
    console.log('An essay was submitted: ' + this.state.value);
    event.preventDefault();
    //TODO: this.setState({
    //        value: '';
    //}); //end this.setState
  } //end handleSubmit

  render() {
    return (
      <div>
        <section id="heading">
          <h1>Textarea Tag Example</h1>
          <p>
            This Webpage will show an example of the <code>textarea</code> tag.
          </p>
        </section>
        <section id="content">
          <h2>Textarea Tag</h2>
          <form onSubmit={this.handleSubmit}>
            <fieldset>
              <legend>Essay Info</legend>
              <p>
                <label htmlFor="essayInfo">
                  Essay:
                </label>
                <textarea className="essayInfo"
                       value={this.state.value}
                       onChange={this.handleChange}
                       autoFocus={true}
                       cols="50"
                       rows="10"
                />
              </p>
              <p>
                <input type="submit" value="Submit" />
              </p>
            </fieldset>
          </form>
        </section>
        <footer>
          <p className="reactInfo">
            <a href="https://reactjs.org">
              React JS Info
            </a>
          </p>
          <p className="lastUpdated">
            Last Updated: {(new Date()).toLocaleString()}
          </p>
        </footer>
      </div>
    );  //end return
  } //end render
} //end EssayForm

/**
 * The Select Tag
 */

class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'coconut'
    }; //end this.state
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  } //end constructor

  handleChange(event) {
    this.setState({
      value: event.target.value
    }); //end this.setState
  } //end handleChange

  handleSubmit(event) {
    //alert('The selected flavor was "' + this.state.value + '".');
    console.log('The selected flavor was "' + this.state.value + '".');
    event.preventDefault();
  } //end handleChange

  render() {
    return (
      <div>
        <section id="heading">
          <h1>Select Tag Example</h1>
          <p>
            This Webpage will show an example of the <code>select</code> tag. 
          </p> 
        </section>
        <section id="content">
          <form onSubmit={this.handleSubmit}>
            <fieldset>
              <legend>Favorite Flavor</legend>
              <p>
                <label htmlFor="favFlavors">
                  Please pick your favorite flavor:
                </label>
                <select id="favFlavors"
                        className="favFlavors"
                        value={this.state.value}
                        onChange={this.handleChange}
                        autoFocus={true}>
                  <option value="grapefruit">
                    Grapefruit
                  </option>
                  <option value="lime">
                    Lime
                  </option>
                  <option value="coconut">
                    Coconut
                  </option>
                  <option value="mango">
                    Mango
                  </option>
                </select>
              </p>
              <p>
                <input type="submit" value="Submit" />
              </p>
            </fieldset>
          </form>
        </section>
        <footer>
          <p className="reactInfo">
            <a href="https://reactjs.org">
              React Info
            </a>
          </p>
          <p>
            Last Updated: {(new Date()).toLocaleString()}
          </p>
        </footer>
      </div>
    ); //end return
  } //end render
} //end FlavorForm

/**
 * TODO: Figure out how to store arrays in the value attribute
 *       to printout selected options.
 */
class MultipleFlavorsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: []
    }; //end this.state
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  } //end constructor

  handleChange(event) {
    this.setState({
      value: event.target.value
    }); //end this.setState
  } //end handleChange

  handleSubmit(event) {
    //alert('The favorite flavor(s) were: ' + this.state.value);
    console.log('The favorite flavor(s) were: ' + this.state.value);
    event.preventDefault();
  } //end handleSubmit

  render() {
    return (
       <div>
         <section id="heading">
           <h1>Select Tag with Muliple Options Selected</h1>
           <p>
             This Webpage will show the use of the <code>select</code> tag 
             with multiple options selected.
           </p>
         </section>
         <section id="content">
           <form onSubmit={this.handleSubmit}>
             <fieldset>
               <legend>Favorite Flavor(s)</legend>
               <p className="multipleFlavors">
                 <label htmlFor="multipleFlavors">
                   Please pick you favorite flavor(s):
                 </label>
                 <select id="mulitpleFlavors"
                         className="multipleFlavors"
                         onChange={this.handleChange}
                         multiple={true}
                         value={this.state.value}>
                   <option value="grapefruit">
                     Grapefruit
                   </option>
                   <option value="lime">
                     Lime
                   </option>
                   <option value="coconut">
                     Coconut
                   </option>
                   <option value="mango">
                     Mango
                   </option>
                 </select>
               </p>
               <p>
                 <input type="submit" value="Submit" />
               </p>
             </fieldset>
           </form>
         </section>
         <footer>
           <p className="reactInfo">
             <a href="https://reactjs.org">
               React Info
             </a>
           </p>
           <p className="lastUpdated">
             Last Updated: {(new Date()).toLocaleString()}
           </p>
         </footer>
       </div>
    ); //end return
  } //end render
} //end MultipleFlavorsForm

/**
 * File input tag examples
 */

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
      reservationNum: ''
    }; //end this.state
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  } //end constructor

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.className;

    this.setState({
      [name]: value
    }); //end setState
  } //end handleInputChange

  handleSubmit(event) {
    console.log('The current state: ' + this.state.isGoing + ', ' + this.state.numberOfGuests + ', ' + this.state.reservationNum + '.');
    event.preventDefault();
  } //end handleSubmit

  render() {
    return (
      <div>
        <section id="heading">
          <h1>Handling Multiple Inputs Example</h1>
          <p>
            This Webpage will display examples of handling multiple
            inputs from the keyboard.
          </p>
        </section>
        <section id="content">
          <h2>Handling Multiple Events</h2>
          <form onSubmit={this.handleSubmit}>
            <fieldset>
              <legend>Reservation Info</legend>
              <p>
                <label htmlFor="isGoing">
                  Is Going:
                </label>
                <input type="checkbox"
                       className="isGoing"
                       checked={this.state.isGoing}
                       onChange={this.handleInputChange}
                />
              </p>
              <p>
                <label htmlFor="numberOfGuests">
                  Number of Guests:
                </label>
                <input type="number"
                       className="numberOfGuests"
                       value={this.state.numberOfGuests}
                       onChange={this.handleInputChange}
                />
              </p>
              <p>
                <label htmlFor="reservationNum">
                  Reservation Number:
                </label>
                <input type="text"
                       className="reservationNum"
                       value={this.state.reservationNum}
                       onChange={this.handleInputChange}
                />
              </p>
              <p>
                <input type="submit" value="Submit" />
              </p>
            </fieldset>
          </form>
        </section>
        <footer>
          <p className="reactInfo">
            <a href="https://reactjs.org">
              React Info
            </a>
          </p>
          <p className="lastUpdated">
            Last Updated: {(new Date()).toLocaleString()}
          </p>
        </footer>
      </div>
    ); //end return
  } //end render
} //end Reservation

/***************************
 * Uncontrolled Components *
 ***************************/

class NameFormUncontrolled extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  } //end constructor

  handleSubmit(event) {
    console.log('A name submitted=> ' + this.input.current.value);
    event.preventDefault();
  } //end handleSubmit

  render() {
    return (
      <div>
        <section id="heading">
          <h1>Uncontrolled Components</h1>
          <p>
            This Webpage will render examples of uncontrolled components.
          </p>
        </section>
        <section className="content">
          <h2>Uncontrolled Components Example</h2>
          <form onSubmit={this.handleSubmit}>
            <fieldset>
              <legend>Name Input</legend>
              <p>
              <label htmlFor="nameInput">
                Name:
              </label>
              <input type="text"
                     className="nameInput"
                     ref={this.input}
                     autoFocus={true}
                     defaultValue="Bob"
              />
              </p>
              <p>
                <input type="submit" value="Submit" />
              </p>
            </fieldset>
          </form>
        </section>
        <footer>
          <p className="reactInfo">
            <a href="https://reactjs.org">
              React JS Info
            </a>
          </p>
          <p className="lastUpdated">
            Last Updated: {(new Date()).toLocaleString()}
          </p>
        </footer>
      </div>
    ); //end render
  } //end render
} //end NameFormUncontrolled

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.handleSubmit = this.handleSubmit = this.handleSubmit.bind(this);
  } //end constructor

  handleSubmit(event) {
    for (let i = 0; i < this.fileInput.current.files.length; i++) {
      let filename = this.fileInput.current.files[i].name;
      console.log('Filename ' + ++i + ': ' + filename);
    } //end for
    event.preventDefault();
  } //end handleSubmit

  render() {
    return (
      <div>
        <section id="heading">
          <h1>File Input Example</h1>
          <p>
            This Webpage will render an uncontrolled component
            file input example.
          </p>
        </section>
        <section className="content">
          <h2>File Input</h2>
          <form onSubmit={this.handleSubmit}>
            <fieldset>
              <legend>File Input Files</legend>
              <p>
                <label htmlFor="uploadFile">
                  Upload file:
                </label>
                <input type="file" 
                       className="uploadFile"
                       ref={this.fileInput}
                />
              </p>
              <p>
                <input type="submit" value="Submit" />
              </p>
            </fieldset>
          </form>
        </section>
        <footer>
          <p className="reactInfo">
            <a href="https://reactjs.org">
              React JS Info
            </a>
          </p>
          <p className="lastUpdated">
            Last Updated: {(new Date()).toLocaleString()}
          </p>
        </footer>
      </div>
    ); //end return
  } //end render
} //end FileInput

/********************
 * Lifting State Up *
 ********************/

function BoilingVerdict(props) {
  //if (!props.verdict) {
  //  return null;
  //} //end if
  //console.log('Celcius=>' + props.celcius);
  //console.log('Verdict=>' + props.verdict);

  if (props.celcius >= 100) {
    return (
      <p className="yesBoil">
        The water would boil.
      </p>  
    ); //end return
  } //end if
  
  return (
    <p className="noBoil">
      The water would not boil.
    </p>
  ); //end return
} //end BoilingVerdict

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: '',
      showVerdict: false
    }; //end this.state

    this.handleChange = this.handleChange.bind(this);
  } //end constructor

  handleChange(event) {
    this.setState({
      temperature: event.target.value,
      showVerdict: event.target.value === '' ? false : true
    }); //end this.setState
  } //end handleChange

  render() {
    const temperature = this.state.temperature;
    const showVerdict = this.state.showVerdict;
    return (
      <div>
        <section id="heading">
          <h1>Lifting State Up Examples</h1>
          <p>
            This Webpage will render examples of lifting state up.
          </p>
        </section>
        <section className="content">
          <h2>Temperature Calculator</h2>
          <fieldset>
            <legend>Enter temperature in Celcius:</legend>
            <input className="celciusTemp"
                   type="number"
                   value={temperature}
                   onChange={this.handleChange}
            />
            <BoilingVerdict celcius={parseFloat(temperature)}
                            verdict={showVerdict}
            />
          </fieldset>
        </section>
        <footer>
          <p className="reactInfo">
            <a href="https://reactjs.org">
              React JS Info
            </a>
          </p>
          <p className="lastUpdated">
            Last Updated: {(new Date()).toLocaleString()}
          </p>
        </footer>
      </div>
    ); //end return
  } //end render
} //end Calculator

/**
 * Adding a second input
 */

function toCelcius(fahrenheit) {
  return (
    (fahrenheit - 32) * 5 / 9
  ); //end return
} //end toCelcius

function toFahrenheit(celcius) {
  return (
    (celcius * 9 / 5) + 32
  ); //end return
} //end toFahrenheit

const scaleNames = {
  c: 'Celcius'
  ,f: 'Fahrenheit'
}; //end scaleNames

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  } //end constructor

  handleChange(event) {
    this.props.onChange(event.target.value)
  } //end handleChange

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;

    return (
      <div>
        <form>
          <fieldset>
            <legend>
              Please enter temperature in {scaleNames[scale]}:   
            </legend>
            <p className="tempInput">
              <input type="number" 
                     value={temperature}
                     onChange={this.handleChange}
              />
            </p>
          </fieldset>
        </form>
      </div>
    ); //end return
  } //end render
} //end TemperatureInput

class CalculatorTwoInputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: 0
      ,scale: 'c'
    }; //end this.state

    this.handleCelciusChange = this.handleCelciusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  } //end constructor

  handleCelciusChange(temperature) {
    this.setState({
      scale: 'c'
      ,temperature: temperature
    }); //end this.setState
  } //end handleCelciusChange

  handleFahrenheitChange(temperature) {
    this.setState({
      scale: 'f'
      ,temperature: temperature
    }); //end this.setState
  } //end handleFahrenheitChange

  render() {
    const temperature = this.state.temperature;
    const scale = this.state.scale;
    const celcius = scale === 'f' ? toCelcius(temperature) : temperature;
    const fahrenheit = scale === 'c' ? toFahrenheit(temperature) : temperature;
    //const showVerdict = this.state.showVerdict;

    return (
      <div>
        <section id="heading">
          <h1>Adding a Second Input Example</h1>
          <p>
            This Webpage will render an example involving lifting
            up state using two inputs.
          </p>
        </section>
        <section className="content">
          <TemperatureInput scale='c'
                            temperature={celcius}
                            onChange={this.handleCelciusChange}
          />
          <TemperatureInput scale='f' 
                            temperature={fahrenheit}
                            onChange={this.handleFahrenheitChange}
          />
          <BoilingVerdict celcius={parseFloat(celcius)} />
        </section>
        <footer>
          <p className="reactInfo">
            <a href="https://reactjs.org">
              React JS Info
            </a>
          </p>
          <p className="lastUpdated">
            Last Updated: {(new Date()).toLocaleString()}
          </p>
        </footer>
      </div>
    ); //end return
  } //end render
} //end CalculatorTwoInputs

/******************************
 * Composition vs Inheritance *
 * 
 * TODO: I'm not able to get any of the Composition examples
 *       to work!!!
 ******************************/

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  ); //end return
} //end FancyBorder

function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  ); //end return
} //end WelcomeDialog

function Contacts() {
  return (
    <div className="Contacts">
      Here is the Contacts section.
    </div>
  ); //end return
} //end Contacts

function Chat() {
  return (
    <div className="Chat">
      Here is the Chat section.
    </div>
  ); //end return
} //end Chat

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  ); //end return
} //end SplitPane

function SplitPaneApp() {
  return (
    <SplitPane 
      left={
        <Contacts />
      } //end left
      right={
        <Chat />
      } //end right
    > 
    </SplitPane>
  ); //end return
} //end SplitPaneApp

/**
 * Specialization Examples
 */

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  ); //end return
} //end Dialog

function WelcomeDialog2() {
  return (
    <Dialog title="Welcome"
            message="Thank you for visiting our spacecraft!" 
    />
  ); //end WelcomeDialog2
} //end WelcomeDialog2

function UserVerdict(props) {
  console.log('showUser=>' + props.showUser);
  console.log('login=>' + props.login);

  if (!props.showUser) {
    return null;
  } //end if
  
  return (
    <p className="SignupDialog-user">
      Welcome aboard, {props.login}
    </p>  
  ); //end return
} //end UserVerdict

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: ''
      ,showUser: false
    } //end this.state

    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  } //end constructor

  handleChange(e) {
    this.setState({
      login: e.target.value
      //,showUser: e.target.value === '' ? false : true
    }); //end this.setState
  } //end handleChange

  handleSignUp(e) {
    //if (this.state.showUser) {
    //  console.log('Welcome aboard, ' + this.state.login + '!'); 
    //} //end if

    this.setState({
      showUser: true
    }); //end setState
  } //end handleSignUp

  render() {
    const login = this.state.login;
    const showUser = this.state.showUser;

    return (
      <Dialog title="Mars Exploration Program"
              message="How should we refer to you?"
      >
        <fieldset>
          <legend>Sign-in/Sign-up Page</legend>
          <p>
            <input value={this.state.login}
                   onChange={this.handleChange}
                   autoFocus={true}
            />
          </p>
          <button onClick={this.handleSignUp}>
            Sign Me Up!
          </button>
        </fieldset>
        <UserVerdict login={login}
                     showUser={showUser}
        />
      </Dialog>
    ); //end return
  } //end render
} //end SignUpDialog

// ==============================
ReactDOM.render(
  /*
  <Comment author={favoriteAuthor}
           textComment={text}
           dateComment={new Date()}
  />,
  */

  /*
  <Blog posts={[{id: 1, title: 'Hello World', content: 'Welcom to learning React'}
               ,{id: 2, title: 'Installation', content: 'You can install React from npm'}]
              } />,
  */

  <FileInput />
  ,document.getElementById('root')
); //end ReactDOM.render
