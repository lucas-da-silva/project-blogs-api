const express = require('express');
const {
  loginRoutes,
  userRoutes,
  categoriesRoutes,
  postRoutes,
} = require('./routes');

const app = express();

app.use(express.json());
app.post('/oi', (req, res) => res.status(200).send('oi'));
app.use('/login', loginRoutes);
app.use('/user', userRoutes);
app.use('/categories', categoriesRoutes);
app.use('/post', postRoutes);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
