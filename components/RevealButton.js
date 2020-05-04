import React, { Component } from 'react'
import Items from '../components/Item'

export default class RevealButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      display: false
    }
    this.transDisplay = this.transDisplay.bind(this);
  }
  transDisplay() {
    this.setState({
      display: !this.state.display
    });
  }
  render() {
    if (this.state.display) {
      return (
         <div>
           <button className="btn btn-secondary" onClick={this.transDisplay}>Close</button>
           <Items />
         </div>
      );
    } else {
      return (
        <div>
          <button className="btn btn-secondary" onClick={this.transDisplay}>Open</button>
         </div>
      );
    }
  }
}