import React, { Component } from 'react';
import { render } from 'react-dom';
import App from 'components/App';
import StateApi from 'state-api';

const store = new StateApi(window.initialData);

render(<App store={store} />, document.getElementById('root'));
