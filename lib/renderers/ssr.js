import React from 'react';
import { renderToString } from 'react-dom/server';
import axios from 'axios';
import App from 'components/App';
import StateApi from 'state-api';
import { port, host } from 'config';

const serverRender = async () => {
  const resp = await axios.get(`http://${host}:${port}/data`);
  const store = new StateApi(resp.data);

  return {
    initialMarkup: renderToString(<App store={store} />),
    initialData: resp.data
  };
};

export default serverRender;
