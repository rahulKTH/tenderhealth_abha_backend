import express from "express";
import Mysql from "mysql";
const app = express()
import db  from "./Models/index.js"
import Search from "./Routes/Search.route.js";
app.use(express.json());

var c = Mysql.createConnection({
  host     : 'deardoc-staging.cjtztruxn5wp.ap-south-1.rds.amazonaws.com',
  user     : 'admin',
  password : 'U4UiK3kzK5t2IIdTZm7k',
  database : 'arogya_database_staging'

});

c.on('error', function(err) {
  console.log('Not Connected'); // example : 'ER_BAD_DB_ERROR'
});

exports.connection = function() {
  console.log('Connected');
   // return c;
};

app.listen(44100,'0.0.0.0')