const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const parser = require('body-parser')

const corsOptions = {
  origin: "http://localhost:5000",
};
const PORT = '8081'
const app = express();
app.use(express.json());
app.use(cors(corsOptions));
app.use(parser.json({strict: false}))
const db = require('./app/models');

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!\n", err);
    process.exit();
  });

require('./app/routes/photo.routes')(app);
app.use("/images", express.static('public/uploads'))
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
