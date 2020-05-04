import React, { Component } from 'react';

export default class Navbar extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      location: ''
    }
  }

  componentDidMount() {
    const currentLocation = window.location.pathname;
    this.setState({
      location: currentLocation
    })

  }

  render() {
    if (this.state.location == "/") {
      return (
        <nav className="navbar navbar-light bg-white w-100 nav-bar-detail">
          <a className="navbar-brand" href="#">
            <img src="/imagine-logo.png" width="30" height="30" className="d-inline-block align-top mr-3" alt="logo" />
            Imagine Debater
          </a>
          <div className="d-flex">
            <span href="/" className="text-dark d-flex nab-var-size mr-3 pl-5 nav-bar-home">Home</span>
            <a href="/overview" className="text-info d-flex mr-auto nab-var-size">Overview</a>
          </div>
          <a href="/jp" className="text-info d-flex ml-auto nab-var-size pr-1">JP</a>
          <span className="text-dark d-flex nab-var-size"> / EN</span>
        </nav>
      );
    } if(this.state.location == "/overview") {
      return (
        <nav className="navbar navbar-light bg-white w-100 nav-bar-detail">
          <a className="navbar-brand" href="#">
            <img src="/imagine-logo.png" width="30" height="30" className="d-inline-block align-top mr-3" alt="logo" />
            Imagine Debater
          </a>
          <div className="d-flex">
            <a href="/" className="text-info d-flex nab-var-size mr-3 pl-5">Home</a>
            <span href="/overview" className="text-dark d-flex mr-auto nab-var-size pr-1">Overview</span>
          </div>
          <a href="/jp" className="text-info d-flex ml-auto nab-var-size pr-1">JP</a>
          <span className="text-dark d-flex nab-var-size"> / EN</span>
        </nav>
      );
    } if(this.state.location == "/jp") {
      return (
        <nav className="navbar navbar-light bg-white w-100 nav-bar-detail">
          <a className="navbar-brand" href="/jp#">
            <img src="/imagine-logo.png" width="30" height="30" className="d-inline-block align-top mr-3" alt="logo" />
            Imagine Debater
          </a>
          <div className="d-flex">
            <span className="text-dark d-flex nab-var-size mr-3 pl-5">ホーム</span>
            <a href="/jp/overview" className="text-info d-flex mr-auto nab-var-size">ルール</a>
          </div>
          <span className="text-dark d-flex ml-auto nab-var-size pr-1">JP /</span>
          <a href="/" className="text-info d-flex nab-var-size">EN</a>
        </nav>
      );
    } else {
      return (
        <nav className="navbar navbar-light bg-white w-100 nav-bar-detail">
          <a className="navbar-brand" href="#">
            <img src="/imagine-logo.png" width="30" height="30" className="d-inline-block align-top mr-3" alt="logo" />
            Imagine Debater
          </a>
          <div className="d-flex">
            <a href="/jp" className="text-info d-flex nab-var-size mr-3 pl-5">ホーム</a>
            <span href="/overview" className="text-dark d-flex mr-auto nab-var-size pr-1">ルール</span>
          </div>
          <a href="/jp" className="text-info d-flex ml-auto nab-var-size pr-1">JP</a>
          <span className="text-dark d-flex nab-var-size"> / EN</span>
        </nav>
      );
    }
  }
}