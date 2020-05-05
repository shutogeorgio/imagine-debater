import React, { Component } from 'react'

export default class Reload extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      location: ''
    }

    this.reloadFunc = this.reloadFunc.bind(this);
  }

  reloadFunc() {
    location.reload();
  }

  componentDidMount() {
    const currentLocation = window.location.pathname;
    this.setState({
      location: currentLocation
    })
  }

  render() {
    return (
      <button className="btn btn-info mt-3"
      onClick={this.reloadFunc}
      >&#8635; {this.state.location == "/game" ? "Reload" : "リロード" }</button>
    )
  }
}