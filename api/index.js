require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.static('build'));

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/build');
});

app.get('/hello', (req, res) => {
  console.log(req);

  res.send({
    message: 'This message has been returned from the server - app is working',
  });
});

if (process.env.PORT) {
  app.listen(process.env.PORT, () => {
    console.log(`API listening on PORT ${process.env.PORT} `);
  });
}

module.exports = app;
