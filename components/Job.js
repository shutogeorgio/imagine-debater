import React, { Component } from 'react'
import randomExtract from '../public/lib/js/randomGetter'
import data from './data/jobs/en.json'

export default class Job extends Component {

  constructor(props) {
    super(props);
    this.state = {
      jobTitle: ''
    }
  }

  componentDidMount() {
    let extractedJob = randomExtract(data.initial)[0] +"\t"+ randomExtract(data.middle)[0] +"\t"+ randomExtract(data.last)[0];
    this.setState({
      jobTitle: extractedJob
    });
  }

  render() {
    return(
      <div>
        {this.state.jobTitle}
      </div>
    )
  }
}