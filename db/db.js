const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'ubuntu',
  host: '18.221.150.119',
  database: 'fortunefinder',
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