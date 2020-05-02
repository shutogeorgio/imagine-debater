import React, { Component } from 'react'
import data from './data/jobs/jp.json'


export default class Job extends Component {

  componentDidMount = () => {
    JSON.parse(data)
      .then((data) => {
        Array.push(data);
      })
    return Array;
  } 

  render() {
    return(
      <div />
    )
  }
}