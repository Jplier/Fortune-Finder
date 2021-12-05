const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'jamesplier',
  host: 'localhost',
  database: 'mvp',
  password: '',
  port: 5432
})

const postUsername = (username) => {
  pool.connect();
  return pool.query(`INSERT INTO usernames(username) VALUES('${username}');`)
}

module.exports = {
  postUserName: postUsername
}