import express from 'express';
import { generatedHTML } from './renderer';

const app = express();

const PORT = process.env.PORT || 4000

app.use(express.static('public'));

app.get('**', (req, res) => {
  res.send(generatedHTML());
})


app.listen(PORT, () => {
  console.log('Listening to Port 4000');
});