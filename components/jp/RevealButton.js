import React, { Component } from 'react'

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
    // change code below this line
    if (this.state.display) {
      return (
         <div>
           <button className="btn btn-info btn-sm" onClick={this.transDisplay}>Close</button>
           <iframe src="https://tango-gacha.com/#word"
              width="100%" height="500" frameBorder="0">
            </iframe>
         </div>
      );
    } else {
      return (
        <div>
           <button className="btn btn-info btn-sm" onClick={this.transDisplay}>Open</button>
         </div>
      );
    }
  }
}