import React from 'react';
import PropTypes from 'prop-types';
import StoreProvider from './StoreProvider';

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

const Article = ({ article, author }) => {
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
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    authorId: PropTypes.string.isRequired,
    body: PropTypes.string
  }),
  author: PropTypes.object
};

const extraProps = (store, originalProps) => ({
  author: store.lookupAuthor(originalProps.article.authorId)
});

export default StoreProvider(extraProps)(Article);
