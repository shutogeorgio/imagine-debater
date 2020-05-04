import React, { Component } from 'react'
import Item from '../components/Item'

export default class RevealButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      display: false,
      location: ''
    }
    this.transDisplay = this.transDisplay.bind(this);
  }

  transDisplay() {
    this.setState({
      display: !this.state.display
    });
  }

  componentDidMount() {
    let currentLocation = window.location.pathname;
    this.setState({
      location: currentLocation
    })
  }

  render() {
    if (this.state.display && this.state.location == "/") {
      return (
         <div className="mt-3">
           <button className="btn btn-info btn-sm" onClick={this.transDisplay}>&times; Close</button>
           <Item />
         </div>
      );
    } else if(!this.state.display && this.state.location == "/") {
      return (
        <div className="mt-3">
          <button className="btn btn-info btn-sm" onClick={this.transDisplay}>Open</button>
         </div>
      );
    } else if (this.state.display && this.state.location == "jp") {
      return (
        <div>
         <button className="btn btn-info btn-sm" onClick={this.transDisplay}>&times; Close</button>
         <hr />
          <iframe src="https://tango-gacha.com/#word"
             width="100%" height="175" frameBorder="0">
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