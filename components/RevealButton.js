import React, { Component } from 'react'
import Item from '../components/Item'

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
         <div className="mt-3">
           <button className="btn btn-info btn-sm" onClick={this.transDisplay}>Close</button>
           <Item />
         </div>
      );
    } else {
      return (
        <div className="mt-3">
          <button className="btn btn-info btn-sm" onClick={this.transDisplay}>Open</button>
         </div>
      );
    }
  }
}