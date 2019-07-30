const express = require('express')
const fs = require('fs');
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/ar-DZ', (req, res) => {
    fs.readFile('./ar-DZ.json', (err, json) => {
      let obj = JSON.parse(json);
      res.json(obj);
    });
  })
  .get('/en-US', (req, res) => {
    fs.readFile('./en-US.json', (err, json) => {
      let obj = JSON.parse(json);
      res.json(obj);
    });
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`))
