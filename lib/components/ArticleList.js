import React from 'react';
import Article from './Article';
import PropTypes from 'prop-types';

const ArticleList = ({ articles, articleActions }) =>
  <div>
    {Object.values(articles).map(article =>
      <Article key={article.id} article={article} actions={articleActions} />
    )}
  </div>;

ArticleList.propTypes = {
  articles: PropTypes.object,
  articleActions: PropTypes.object
};

export default ArticleList;
