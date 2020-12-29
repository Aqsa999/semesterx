const winston = require("winston");
const express = require("express");
const config = require("config");
const app = express();
const path = require('path');
//aajajaj

require("./startup/logging")();
require("./startup/cors")(app);
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();
require("./startup/validation")();
var mongoose = require("mongoose");
app.use(express.static(path.join(__dirname, "/client/build")));


app.get('*',(req,res)=>{

  app.use(express.static('client/bulid'))
 res.sendFile(path.resolve(__dirname,'client','build','index.html'));
})

const port = process.env.PORT || config.get("port");
const server = app.listen(port, () =>
  winston.info(`Listening on port ${port}...`)
);

module.exports = server;
