import express from 'express';
import config from './config';
import ssr from 'renderers/ssr';

import { data } from 'testData';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  try {
    const initialContent = await ssr();
    res.render('index', { ...initialContent });
  } catch (e) {
    console.log(e);
  }
});

app.get('/data', (req, res) => {
  res.json(data);
});

app.listen(config.port, () => {
  console.info(`Server running on port ${config.port}`);
});
