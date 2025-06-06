const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(require('cors')());

app.get('/', (req, res) => {
  res.send('Działa!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serwer działa na porcie ${PORT}`));
