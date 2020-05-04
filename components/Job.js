import React, { Component } from 'react'
import data from './data/overview/en.json'

export default class Job extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstTitle: [],
      middleTitle: [],
      lastTitle: [],
    }
    this.randomExtract = this.randomExtract.bind(this);
  }

  randomExtract() {
    return Math.floor(Math.random() * - 0.5);
  }

  componentDidMount() {
    
  }

  render() {
    return(
      <div />
    )
  }
}