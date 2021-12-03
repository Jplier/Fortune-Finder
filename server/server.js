const express = require('express');
const db = require('../db/db.js')


const app = express();

app.listen(3000, (err) => {
  console.log('Listening on port 3000')
  if (err) {
    console.log('Failed to connect to server')
  }
})

app.get("/:username/rolls", (req, res) => {
  db.getRolls(req.query.username)
  .then((results) => {
    res.send(results)
  })
  .catch((err) => {
    res.send(err)
  })
})