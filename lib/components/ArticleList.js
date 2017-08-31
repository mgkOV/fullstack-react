import React from 'react';
import Article from './Article';
import PropTypes from 'prop-types';

const ArticleList = ({ articles, store }) =>
  <div>
    {Object.values(articles).map(article =>
      <Article key={article.id} article={article} store={store} />
    )}
  </div>;

ArticleList.propTypes = {
  articles: PropTypes.object,
  store: PropTypes.object
};

export default ArticleList;
