import express from 'express';
import config from './config';
import ssr from 'renderers/ssr';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const initialContent = ssr();
  res.render('index', { initialContent });
});

app.listen(config.port, () => {
  console.info(`Server running on port ${config.port}`);
});
