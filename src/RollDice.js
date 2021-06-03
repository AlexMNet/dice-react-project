import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends React.Component {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six'],
  };
  state = {
    die1: `one`,
    die2: `one`,
    isRolling: false,
    numOfDie: 2,
  };

  getRandDie = () => {
    let randNum = Math.floor(Math.random() * this.props.sides.length);
    return this.props.sides[randNum];
  };

  roll = () => {
    this.setState({ die1: this.getRandDie() });
    this.setState({ die2: this.getRandDie() });
    this.setState({ isRolling: true });
    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 1200);
  };

  render() {
    return (
      <div className="RollDice">
        <h1>Dice App!</h1>
        <small>Coivd Safe 🦠</small>
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
        <p>
          Total:
          {this.props.sides.indexOf(this.state.die1) +
            this.props.sides.indexOf(this.state.die2) +
            2}
        </p>
        <button
          disabled={this.state.isRolling}
          onClick={this.roll}
          className={`RollDice-btn ${this.state.isRolling && 'rolling'}`}
        >
          {this.state.isRolling ? 'Rolling...' : 'Roll Dice!'}
        </button>
      </div>
    );
  }
}

export default RollDice;
