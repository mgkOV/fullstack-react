import React, { Component } from 'react';
import axios from 'axios';

import ArticleList from './ArticleList';

import DataApi from 'state-api';
// import { data } from '../testData';
//
// const api = new DataApi(data);

class App extends Component {
  state = {
    authors: this.props.authors,
    articles: this.props.articles
  };

  // async componentDidMount() {
  //   const resp = await axios.get('/data');
  //   const api = new DataApi(resp.data);
  //
  //   this.setState(() => ({
  //     authors: api.getAuthors(),
  //     articles: api.getArticles()
  //   }));
  // }

  articleActions = {
    lookupAuthor: authorId => this.state.authors[authorId]
  };

  render() {
    return (
      <div>
        <ArticleList
          articles={this.state.articles}
          articleActions={this.articleActions}
        />
      </div>
    );
  }
}

export default App;
