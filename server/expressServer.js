const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express();

  server.get('/p/:id', (req, res) => {

    // handling routes
    // app.render(req, res, '/post', { id: req.params.id });
    app.render(req, res, '/post', req.params);
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, err => {
    if (err) throw err;
    console.log('Running express server on http://localhost:3000');
  });
});
