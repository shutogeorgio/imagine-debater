import React from 'react'
import fetch from 'isomorphic-unfetch'

const url = `http://newsapi.org/v2/everything?q=bitcoin&from=2020-04-02&sortBy=publishedAt&apiKey=${process.env.API_KEY}`;

class Item extends React.Component {

  constructor(props) {
    super(props);
 
    this.state = {
      news: [],
    };
  }

  componentDidMount() {
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ news: data.articles }))
  }

  render() {
    const { news } = this.state;
 
    return (
      <ul>
        {news.map(info =>
          <li key={info.id}>
            <a href={info.url}>{info.author}</a>
          </li>
        )}
      </ul>
    );
  }
}

export default Item