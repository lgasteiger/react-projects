/*********************************************************************
 * Description: index.js - This JS file will be the initial react file
 *              called when the Web app starts.
 * Date: 2019-01-18
 * Author: React Tutorial
 *********************************************************************/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    ); //end return
  } //end render
} //end Square

class Board extends React.Component {
  renderSquare(i) {
    return <Square />; 
  } //end renderSquare

  render() {
    const status = 'Next Player: X';

    return (
      <div>
        <div className="status">
          {status};
        </div>
      </div>
    );
  } //end render
} //end Board