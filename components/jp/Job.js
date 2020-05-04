import React, { Component } from 'react'
import data from '../data/jobs/jp.json'

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
    this.setState({
      jobTitle: randomExtract(data.name)[0]
    });
  }

  render() {
    return(
      <div className="d-flex flex-column  mt-3">
        <div><strong>役職:</strong></div>
        <h5 className="mt-1">{this.state.jobTitle}</h5>
      </div>
    )
  }
}