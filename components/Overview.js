import React, { Component } from 'react'
import data from './data/overview/en.json'

const newdata = data.map((data) => { 
  return(
    <li className="mt-3" key={data.id} >
      <h4> {data.desc}</h4>  
    </li>
  )
})

export default class Overview extends Component {
  render() {
    return (
      <ul className="m-3 p-3 owncard">{newdata}</ul>
    )
  }
}