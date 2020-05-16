import React, { Component } from 'react'
import data from '../data/overview/jp.json'

const newdata = data.map((data) => { 
  return(
    <li className="mt-3" key={data.id} >
      <h5> {data.desc}</h5>  
    </li>
  )
})

export default class OverviewJP extends Component {
  render() {
    return (
      <ul className="p-3 owncard">{newdata}</ul>
    )
  }
}