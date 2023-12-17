const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { connectDb } = require("./utils/connectDb");

const PORT = 3001;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Listenning on port ${PORT}`); // listen on port
  connectDb();
});
