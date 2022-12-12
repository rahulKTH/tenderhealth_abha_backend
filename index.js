import express from "express";
const app = express()
app.use(express.json());

import mysql from "mysql";
var connection = mysql.createConnection({
  host: 'deardoc-staging.cjtztruxn5wp.ap-south-1.rds.amazonaws.com',
  user: 'admin',
  password: 'U4UiK3kzK5t2IIdTZm7k',
  database: 'arogya_database_staging'
})

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
})

app.get("/",(req,res) => {
    connection.query('SELECT * from abha_user LIMIT 1', (err, rows) => {
        if(err) throw err;
        console.log('The data from users table are: \n', rows);
        connection.end();
    });
});

app.get("/",(req,res) => {
  connection.query('SELECT * from abha_user LIMIT 1', (err, rows) => {
      if(err) throw err;
      console.log('The data from users table are: \n', rows);
      connection.end();
  });
});

app.listen(3000, () => {
    console.log('Server is running at port 3000');
});

app.listen(44100,'0.0.0.0')