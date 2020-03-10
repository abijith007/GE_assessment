const mysql = require("mysql");
const express = require("express");
const cors = require("cors");
var app = express();
const bodyparser = require("body-parser");

app.use(cors());

var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "userdb",
  multipleStatements: true
});

mysqlConnection.connect(err => {
  if (!err) console.log("DB connection succeded.");
  else
    console.log(
      "DB connection failed \n Error : " + JSON.stringify(err, undefined, 2)
    );
});

app.listen(4000, () =>
  console.log("Express server is runnig at port no : 4000")
);

app.get("/", (req, res) => {
  res.send("Welcome to the MySQL server");
});

//Get all users
app.get("/users", (req, res) => {
  mysqlConnection.query("SELECT * FROM users", (err, rows, fields) => {
    if (!err) return res.json({ data: rows });
    else return res.send(err);
  });
});

//Get an users
app.get("/users/:username/:password", (req, res) => {
  mysqlConnection.query(
    "SELECT * FROM users WHERE username = ? and password = ?",
    [req.params.username, req.params.password],
    (err, rows, fields) => {
      if (!err) return res.json(rows[0]);
      else return res.send(err);
    }
  );
});

//Delete an user
app.delete("/users/remove/:username/:password", (req, res) => {
  mysqlConnection.query(
    "DELETE FROM users WHERE username = ? AND password = ?",
    [req.params.username,req.params.password],
    (err, rows, fields) => {
      if (!err) res.send("Deleted successfully.");
      else console.log(err);
    }
  );
});

//Insert an user
app.post("/users", (req, res) => {
  let usr = req.body;
  var sql =
    "SET @id = ?;SET @name = ?;SET @password = ?;SET @email = ?; \
    CALL userAddOrEdit(@id,@name,@password,@email);";
  mysqlConnection.query(
    sql,
    [usr.id, usr.name, usr.password, usr.email],
    (err, rows, fields) => {
      if (!err)
        rows.forEach(element => {
          if (element.constructor == Array)
            res.send("Inserted employee id : " + element[0].id);
        });
      else console.log(err);
    }
  );
});

//Update an users
app.put("/users", (req, res) => {
  let usr = req.body;
  var sql =
    "SET @id = ?;SET @name = ?;SET @password = ?;SET @email = ?; \
    CALL userAddOrEdit(@id,@name,@password,@email);";
  mysqlConnection.query(
    sql,
    [usr.id, usr.name, usr.password, usr.email],
    (err, rows, fields) => {
      if (!err) res.send("Updated successfully!");
      else console.log(err);
    }
  );
});
