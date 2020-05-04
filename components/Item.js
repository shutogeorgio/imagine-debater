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
        <li key={singleWord}>{singleWord}</li>
      )
    });

    return (
      <ul className="mt-3">
        {threeWords}
      </ul>
    );
  }
}

export default Item