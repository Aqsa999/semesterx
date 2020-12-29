const winston = require("winston");
const express = require("express");
const config = require("config");
const app = express();
//aajajaj

require("./startup/logging")();
require("./startup/cors")(app);
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();
require("./startup/validation")();
var mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     await mongoose.connect("mongodb+srv://aftabfalak:aftab123@devconnector-koebl.mongodb.net/aqsa99?retryWrites=true&w=majority", {
//       useUnifiedTopology: true,
//       useNewUrlParser: true,
//       useCreateIndex:true,
//       useFindAndModify:false
//     });
//     // console.log("mongoDB is connected");
//     // socket.on("connection", socketConnection);
//   } catch (error) {
//     console.log(error.message);
//     // exit process with failure
//     // process.exit(1);
//   }
// };
// connectDB();

// mongoose.connect(
//   `  mongodb+srv://vidlyuser:1234@cluster0.wqzvb.mongodb.net/Main?retryWrites=true&w=majority`,
//   { useNewUrlParser: true, useUnifiedTopology: true }
// );



const port = process.env.PORT || config.get("port");
const server = app.listen(port, () =>
  winston.info(`Listening on port ${port}...`)
);

module.exports = server;
