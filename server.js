const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3000;
const routes = require("./src/route");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", routes);
app.get('/', (req, res) => {
  res.send('successfull running');
})
app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
