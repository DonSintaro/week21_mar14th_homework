const express = require('express')
const next = require('next')
const mongoose = require("mongoose");
const bodyParser = require('body-parser')


const port =  80 //process.env.PORT || 80
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const routes = require("./controllers/router.js");



app.prepare().then(() => {
  const server = express();

  mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/googlebooksaves", { useNewUrlParser: true }
  );

    server.use(bodyParser.json()); // <--- Here
    server.use(bodyParser.urlencoded({extended: true}));

    server.use(routes);


//////////////////////////////////////////////////////

  server.get('/', (req, res) => {
    return app.render(req, res, '/', req.query)
  })

  server.get('/saved', (req, res) => {
    return app.render(req, res, '/saved', req.query)
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})