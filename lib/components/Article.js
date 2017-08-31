import React from 'react';
import PropTypes from 'prop-types';

const style = {
  article: {
    paddingBottom: 10,
    borderBottomStyle: 'solid',
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    marginBottom: 10
  },
  title: {
    fontWeight: 'bold'
  },
  date: {
    fontSize: '0.85em',
    color: '#888'
  },
  author: {
    paddingBottom: 10,
    paddingTop: 10
  },
  body: {
    paddingLeft: 20
  }
};
const displayDate = dateString => new Date(dateString).toDateString();

const Article = ({ article, store }) => {
  const author = store.lookupAuthor(article.authorId);
  return (
    <div style={style.article}>
      <div style={style.title}>
        {article.title}
      </div>
      <div style={style.date}>
        {displayDate(article.date)}
      </div>
      <div style={style.author}>
        <a href={author.website}>
          {author.firstName} {author.lastName}
        </a>
      </div>
      <div style={style.body}>
        {article.body}
      </div>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    authorId: PropTypes.string,
    body: PropTypes.string
  }),
  store: PropTypes.shape({
    lookupAuthor: PropTypes.func
  })
};

export default Article;
