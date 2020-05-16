import React from 'react'
import fetch from 'isomorphic-unfetch'

class Item extends React.Component {

  constructor(props) {
    super(props);
 
    this.state = {
      words: [],
    };
  }

  componentDidMount() {
    let limit = 3;
    fetch(`https://random-word-api.herokuapp.com/word?number=${limit}`)
      .then(response => response.json())
      .then(data => this.setState({
        words: data
      }))
  }

  render() {
    const threeWords = this.state.words.map(singleWord => {
      return (
        <li key={singleWord}><strong>{singleWord}</strong></li>
      )
    });

    return (
      <div className="mt-3">
        <hr />
        <h5>Items List</h5>
        <ul className="mt-1">
        {threeWords}
        </ul>
      </div>
    );
  }
}

export default Item