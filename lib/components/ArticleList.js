import React from 'react';
import Article from './Article';
import PropTypes from 'prop-types';

const ArticleList = ({ articles }) =>
  <div>
    {Object.values(articles).map(article =>
      <Article key={article.id} article={article} />
    )}
  </div>;

ArticleList.propTypes = {
  articles: PropTypes.object
};

export default ArticleList;
