const express = require('express');
const db = require('../db/db.js')


const app = express();
app.use(express.json());
app.use(express.static('dist'))

app.listen(3000, (err) => {
  console.log('Listening on port 3000')
  if (err) {
    console.log('Failed to connect to server')
  }
})

// app.get("/:username/rolls", (req, res) => {
//   db.getRolls(req.query.username)
//   .then((results) => {
//     res.send(results)
//   })
//   .catch((err) => {
//     res.send(err)
//   })
// })

app.post('/username', (req, res) => {
  db.postUserName(req.body.username)
  .then((results) => {
    res.status(201).send('hello, world');
  })
  .catch((err) => {
    res.status(404).send(`Error ${err}`)
  })
})