import React, { Component } from 'react'
import data from './data/jobs/en.json'

export default class Job extends Component {

  constructor(props) {
    super(props);
    this.state = {
      jobTitle: ''
    }
  }

  componentDidMount() {
    const randomly = () => {
      return 0.5 - Math.random();
    }
    const randomExtract = (array) => {
      array.sort(randomly);
      return array;
    }
    let extractedJob = randomExtract(data.initial)[0] + "\t" + randomExtract(data.middle)[0] + "\t" + randomExtract(data.last)[0];
    this.setState({
      jobTitle: extractedJob
    });
  }

  render() {
    return(
      <div className="d-flex align-items-center mt-3">
        <h5>Role:<br /> {this.state.jobTitle}</h5>
      </div>
    )
  }
}