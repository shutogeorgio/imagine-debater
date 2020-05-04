import React from 'react'
import fetch from 'isomorphic-unfetch'

const url = `http://newsapi.org/v2/everything?q=bitcoin&from=2020-04-02&sortBy=publishedAt&apiKey=${process.env.API_KEY}`;

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
        <li>{singleWord}</li>
      )
    });

    return (
      <ul>
        {threeWords}
      </ul>
    );
  }
}

export default Item