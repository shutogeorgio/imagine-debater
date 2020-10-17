import Link from 'next/link'
import { withRouter } from 'next/router'
import React from 'react';

export default class Navbar extends React.Component {
  render() {
    const path: string = "/"
    switch (path) {
      case "/":
        return (
          <nav className="bg-gray-100 w-full flex items-center px-10 py-3 border-t-4 border-teal-600 border-t:after border-gray-500:after">
            <Link href="/#">
              <a className="navbar-brand flex items-center">
                <img src="/imagine-logo.png" width="30" height="30" className="d-inline-block align-top mr-3" alt="logo" />
                Imagine Debater
              </a>
            </Link>
            <div className="flex mr-auto items-center">
              <span className="text-text text-sm mr-3 pl-5">Home</span>
              <Link href="/overview">
                <a className="text-teal-600 text-sm pr-1 mr-3">Overview</a>
              </Link>
              <Link href="/game">
                <a className="text-teal-600 mr-auto text-sm pr-1">Game</a>
              </Link>
            </div>
            <div className="flex ml-auto">
              <Link href="/jp">
                <a className="text-teal-600 text-sm pr-1">JP</a>
              </Link>
              <span className="text-dark text-sm"> / EN</span>
            </div>
          </nav>
        );
      
      case "/overview":
        return (
          <nav className="navbar navbar-light bg-white w-100 nav-bar-detail">
            <Link href="/">
              <a className="navbar-brand">
                <img src="/imagine-logo.png" width="30" height="30" className="d-inline-block align-top mr-3" alt="logo" />
                Imagine Debater
              </a>
            </Link>  
            <div className="flex">
              <Link href="/">
                <a className="text-teal-600 flex text-sm mr-3 pl-5">Home</a>
              </Link>
              <span className="text-dark flex text-sm pr-1 mr-3">Overview</span>
              <Link href="/game">
                <a className="text-teal-600 flex mr-auto text-sm pr-1">Game</a>
              </Link>
            </div>
            <Link href="/jp/overview">
              <a className="text-teal-600 flex ml-auto text-sm pr-1">JP</a>
            </Link>
            <span className="text-dark flex text-sm"> / EN</span>
          </nav>
        );
      
      case "/game":
        return (
          <nav className="navbar navbar-light bg-white w-100 nav-bar-detail">
            <Link href="/">
              <a className="navbar-brand">
                <img src="/imagine-logo.png" width="30" height="30" className="d-inline-block align-top mr-3" alt="logo" />
                Imagine Debater
              </a>
            </Link>
            <div className="flex">
              <Link href="/">
                <a className="text-teal-600 flex text-sm mr-3 pl-5">Home</a>
              </Link>
              <Link href="overview">
                <a className="text-teal-600 flex text-sm pr-1 mr-3">Overview</a>
              </Link>
              <span className="text-dark flex mr-auto text-sm pr-1">Game</span>
            </div>
            <Link href="/jp/game">
              <a className="text-teal-600 flex ml-auto text-sm pr-1">JP</a>
            </Link>
            <span className="text-dark flex text-sm"> / EN</span>
          </nav>
        );
      
      case "/jp":
        return (
          <nav className="navbar navbar-light bg-white w-100 nav-bar-detail">
            <Link href="/jp#">
              <a className="navbar-brand">
                <img src="/imagine-logo.png" width="30" height="30" className="d-inline-block align-top mr-3" alt="logo" />
                Imagine Debater
              </a>
            </Link>
            <div className="flex">
              <span className="text-dark flex text-sm mr-3 pl-5">ホーム</span>
              <Link href="/jp/overview">
                <a className="text-teal-600 flex text-sm pr-1 mr-3">ルール</a>
              </Link>
              <Link href="/jp/game">
                <a className="text-teal-600 flex mr-auto text-sm pr-1">ゲーム</a>
              </Link>
            </div>
            <span className="text-dark flex ml-auto text-sm pr-1">JP /</span>
            <Link href="/">
              <a className="text-teal-600 flex text-sm">EN</a>
            </Link>
          </nav>
        );
      
      case "/jp/overview":
        return (
          <nav className="navbar navbar-light bg-white w-100 nav-bar-detail">
            <Link href="/jp">
              <a className="navbar-brand">
                <img src="/imagine-logo.png" width="30" height="30" className="d-inline-block align-top mr-3" alt="logo" />
                Imagine Debater
              </a>
            </Link>
            <div className="flex">
              <Link href="/jp">
                <a className="text-teal-600 flex text-sm mr-3 pl-5">ホーム</a>
              </Link>
              <span className="text-dark flex text-sm pr-1 mr-3">ルール</span>
              <Link href="/jp/game">
                <a className="text-teal-600 flex mr-auto text-sm pr-1">ゲーム</a>
              </Link>
            </div>
            <span className="text-dark flex ml-auto text-sm pr-1">JP /</span>
            <Link href="/overview">
              <a className="text-teal-600 flex text-sm">EN</a>
            </Link>
          </nav>
        );
      
      case "/jp/game":
        return (
          <nav className="navbar navbar-light bg-white w-100 nav-bar-detail">
            <Link href="/jp">
              <a className="navbar-brand">
                <img src="/imagine-logo.png" width="30" height="30" className="d-inline-block align-top mr-3" alt="logo" />
                Imagine Debater
              </a>
            </Link>
            <div className="flex">
              <Link href="/jp">
                <a className="text-teal-600 flex text-sm mr-3 pl-5">ホーム</a>
              </Link>
              <Link href="/jp/overview">
                <a className="text-teal-600 flex text-sm pr-1 mr-3">ルール</a>
              </Link>
              <span className="text-dark flex mr-auto text-sm pr-1">ゲーム</span>
            </div>
            <span className="text-dark flex ml-auto text-sm pr-1">JP /</span>
            <Link href="/game">
              <a className="text-teal-600 flex text-sm">EN</a>
            </Link>
          </nav>
        );
      
      default:
        return (
          <nav className="navbar navbar-light bg-white w-100 nav-bar-detail">
            <Link href="/">
              <a className="navbar-brand">
                <img src="/imagine-logo.png" width="30" height="30" className="d-inline-block align-top mr-3" alt="logo" />
                Imagine Debater
              </a>
            </Link>
            <div className="flex">
              <Link href="/jp">
                <a className="text-teal-600 flex text-sm mr-3 pl-5">Home</a>
              </Link>
              <span href="/overview" className="text-dark flex mr-auto text-sm pr-1">Overview</span>
            </div>
            <Link href="/jp">
              <a className="text-teal-600 flex ml-auto text-sm pr-1">JP</a>
            </Link>
            <span className="text-dark flex text-sm"> / EN</span>
          </nav>
        );
    }
  }
}