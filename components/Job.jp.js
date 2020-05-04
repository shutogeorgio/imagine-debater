import React, { Component } from 'react'
import randomExtract from '../public/lib/js/randomGetter'
import data from './data/jobs/jp.json'

export default class Job extends Component {

  constructor(props) {
    super(props);
    this.state = {
      jobTitle: ''
    }
  }

  componentDidMount() {
    this.setState({
      jobTitle: randomExtract(data.name)[0]
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