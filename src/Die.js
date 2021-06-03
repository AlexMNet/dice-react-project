import React, { Component } from 'react';
import './Die.css';

class Die extends React.Component {
  render() {
    return (
      <div className={`Die ${this.props.isRolling && 'wobble'}`}>
        <i className={`fas fa-dice-${this.props.dieNum} fa-10x`}></i>
      </div>
    );
  }
}

export default Die;
