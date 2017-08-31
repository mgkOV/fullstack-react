import React from 'react';
import { renderToString } from 'react-dom/server';
import axios from 'axios';
import App from 'components/App';
import DataApi from 'state-api';
import { port, host } from 'config';

const serverRender = async () => {
  const resp = await axios.get(`http://${host}:${port}/data`);
  const api = new DataApi(resp.data);

  const initialData = {
    authors: api.getAuthors(),
    articles: api.getArticles()
  };

  return {
    initialMarkup: renderToString(<App {...initialData} />),
    initialData
  };
};

export default serverRender;
