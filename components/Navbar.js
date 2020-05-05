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
    switch (this.state.location) {
      case "/":
        return (
          <nav className="navbar navbar-light bg-white w-100 nav-bar-detail">
            <a className="navbar-brand" href="#">
              <img src="/imagine-logo.png" width="30" height="30" className="d-inline-block align-top mr-3" alt="logo" />
              Imagine Debater
              </a>
            <div className="d-flex">
              <span className="text-text d-flex nab-var-size mr-3 pl-5">Home</span>
              <a href="/overview" className="text-info d-flex nab-var-size pr-1 mr-3">Overview</a>
              <a href="/game" className="text-info d-flex mr-auto nab-var-size pr-1">Game</a>
            </div>
            <a href="/jp" className="text-info d-flex ml-auto nab-var-size pr-1">JP</a>
            <span className="text-dark d-flex nab-var-size"> / EN</span>
          </nav>
        );
      
      case "/overview":
        return (
          <nav className="navbar navbar-light bg-white w-100 nav-bar-detail">
            <a className="navbar-brand" href="#">
              <img src="/imagine-logo.png" width="30" height="30" className="d-inline-block align-top mr-3" alt="logo" />
              Imagine Debater
              </a>
            <div className="d-flex">
              <a href="/" className="text-info d-flex nab-var-size mr-3 pl-5">Home</a>
              <span className="text-dark d-flex nab-var-size pr-1 mr-3">Overview</span>
              <a href="/game" className="text-info d-flex mr-auto nab-var-size pr-1">Game</a>
            </div>
            <a href="/jp" className="text-info d-flex ml-auto nab-var-size pr-1">JP</a>
            <span className="text-dark d-flex nab-var-size"> / EN</span>
          </nav>
        );
      
      case "/game":
        return (
          <nav className="navbar navbar-light bg-white w-100 nav-bar-detail">
            <a className="navbar-brand" href="#">
              <img src="/imagine-logo.png" width="30" height="30" className="d-inline-block align-top mr-3" alt="logo" />
              Imagine Debater
              </a>
            <div className="d-flex">
              <a href="/" className="text-info d-flex nab-var-size mr-3 pl-5">Home</a>
              <a href="/overview" className="text-info d-flex nab-var-size pr-1 mr-3">Overview</a>
              <span className="text-dark d-flex mr-auto nab-var-size pr-1">Game</span>
            </div>
            <a href="/jp/game" className="text-info d-flex ml-auto nab-var-size pr-1">JP</a>
            <span className="text-dark d-flex nab-var-size"> / EN</span>
          </nav>
        );
      
      case "/jp":
        return (
          <nav className="navbar navbar-light bg-white w-100 nav-bar-detail">
            <a className="navbar-brand" href="/jp#">
              <img src="/imagine-logo.png" width="30" height="30" className="d-inline-block align-top mr-3" alt="logo" />
              Imagine Debater
            </a>
            <div className="d-flex">
              <span className="text-dark d-flex nab-var-size mr-3 pl-5">ホーム</span>
              <a href="/jp/overview" className="text-info d-flex nab-var-size pr-1 mr-3">ルール</a>
              <a href="/jp/game" className="text-info d-flex mr-auto nab-var-size pr-1">ゲーム</a>
            </div>
            <span className="text-dark d-flex ml-auto nab-var-size pr-1">JP /</span>
            <a href="/" className="text-info d-flex nab-var-size">EN</a>
          </nav>
        );
      
      case "/jp/overview":
        return (
          <nav className="navbar navbar-light bg-white w-100 nav-bar-detail">
            <a className="navbar-brand" href="#">
              <img src="/imagine-logo.png" width="30" height="30" className="d-inline-block align-top mr-3" alt="logo" />
              Imagine Debater
              </a>
            <div className="d-flex">
              <a href="/jp" className="text-info d-flex nab-var-size mr-3 pl-5">ホーム</a>
              <span className="text-dark d-flex nab-var-size pr-1 mr-3">ルール</span>
              <a href="/jp/game" className="text-info d-flex mr-auto nab-var-size pr-1">ゲーム</a>
            </div>
            <span className="text-dark d-flex ml-auto nab-var-size pr-1">JP /</span>
            <a href="/" className="text-info d-flex nab-var-size">EN</a>
          </nav>
        );
      
      case "/jp/game":
        return (
          <nav className="navbar navbar-light bg-white w-100 nav-bar-detail">
            <a className="navbar-brand" href="#">
              <img src="/imagine-logo.png" width="30" height="30" className="d-inline-block align-top mr-3" alt="logo" />
              Imagine Debater
              </a>
            <div className="d-flex">
              <a href="/jp" className="text-info d-flex nab-var-size mr-3 pl-5">ホーム</a>
              <a href="/jp/overview" className="text-info d-flex nab-var-size pr-1 mr-3">ルール</a>
              <span className="text-dark d-flex mr-auto nab-var-size pr-1">ゲーム</span>
            </div>
            <span className="text-dark d-flex ml-auto nab-var-size pr-1">JP /</span>
            <a href="/game" className="text-info d-flex nab-var-size">EN</a>
          </nav>
        );
      
      default:
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