import express from 'express';

const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Example app listening on port 3000!');
});
