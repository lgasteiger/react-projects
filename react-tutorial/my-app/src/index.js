/*********************************************************************
 * Description: index.js - This JS file will be the initial react file
 *              called when the Web app starts.
 * Date: 2019-01-18
 * Author: React Tutorial
 *********************************************************************/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  return (
    <button className="square" 
            onClick={props.onClick}>
            {props.value}
    </button>
  ); //end return
} //end Square

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square value={this.props.squares[i]} 
              onClick={() => this.props.onClick(i)} />
    ); 
  } //end renderSquare

  render() {
    /*
    return (
      <div>
        const squareNum = 0;
        for (let i = 0; i < 3; i++) {
          <div className="board-row">
          for (let j = 0; j < 3; j++) {
            {this.renderSquare(squareNum)}
            squareNum++;
          } //end for
          </div>
        } //end for
      </div>
    ); //end return
    */

    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    ); //end return
  } //end render
} //end Board

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true,
      stepNumber: 0,
    }; //end this.state
  } //end constructor

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map(
      (step, move) => {
        const desc = move ? 'Go to move #' + move : 'Go to game start';
        return (
          <li key={move}>
            <button onClick={() => this.jumpTo(move)}>
              {desc}
            </button>
          </li>
        ); //end return
      } //end (step, move)
    ); //end moves

    let status;
    if (winner) {
      status = 'Winner ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    } //end if

    return (
      <div className="game">
        <div className="board-game">
          <Board squares={current.squares} 
                 onClick={(i) => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>
            {status}
          </div>
          <ol>
            {moves}
          </ol>
        </div>
      </div>
    ); //end return
  } //end render

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    } //end if

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
    }); //end this.setState
  } //end handleClick

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    }); //end this.setState
  } //end jumpTo
} //end Game

// =================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
); //end ReactDOM.render

/*********************************************************************
 * Description: This helper function will determine a game winner by
 *              showing when a game is won and there are no more turns
 *              to make.
 * Date: 2019-01-24
 * Author: React Tutorial 
 *********************************************************************/
function calculateWinner(squares) {
  const lines = [
    [0,1,2]
    ,[3,4,5]
    ,[6,7,8]
    ,[0,3,6]
    ,[1,4,7]
    ,[2,5,8]
    ,[0,4,8]
    ,[2,4,6]
  ]; //end lines
  for (let i = 0; i < lines.length; i++) {
    const [a,b,c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    } //end if
  } //end for

  return null;
} //end calculateWinner