import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends React.Component {
  state = {
    die1: `one`,
    die2: `one`,
    isRolling: false,
    numOfDie: 2,
  };

  getNumOfDie = (e) => {
    this.setState({ numOfDie: e.target.value });
  };

  //You can do this or store the names of the numbers in an array and use index to choose them!
  numToWord = (num) => {
    if (num === 0) return `zero`;
    if (num === 1) return `one`;
    if (num === 2) return `two`;
    if (num === 3) return `three`;
    if (num === 4) return `four`;
    if (num === 5) return `five`;
    if (num === 6) return `six`;
    return null;
  };

  getRandNum = () => {
    return this.numToWord(Math.floor(Math.random() * 6) + 1);
  };

  roll = () => {
    this.setState({ die1: this.getRandNum() });
    this.setState({ die2: this.getRandNum() });
    this.setState({ isRolling: true });
    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 1200);
  };

  render() {
    return (
      <div className="RollDice">
        <h1>Dice App!</h1>
        <div className="RollDice-container">
          <Die dieNum={this.state.die1} isRolling={this.state.isRolling} />
          <Die dieNum={this.state.die2} isRolling={this.state.isRolling} />
        </div>
        {this.state.isRolling && (
          <p>
            {this.state.die1 === 'one' &&
              this.state.die2 === 'one' &&
              'Snake Eyes! 🐍'}
          </p>
        )}
        <button
          disabled={this.state.isRolling}
          onClick={this.roll}
          className={`RollDice-btn ${this.state.isRolling && 'rolling'}`}
        >
          {this.state.isRolling ? 'Rolling...' : 'Roll Dice!'}
        </button>
        {/* <p>Number of Die:</p>
        <input
          onChange={this.getNumOfDie}
          type="number"
          value={this.state.numOfDie}
        /> */}
      </div>
    );
  }
}

export default RollDice;
