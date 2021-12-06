const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const fileUpload = require("express-fileupload");
const path = require("path");
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:8081",
};
const PORT = '8081'
const app = express();
app.use(express.json());
app.use(cors(corsOptions));

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


app.use(fileUpload());

// app.post("/upload", (req, res) => {
//   if (!req.files) {
//     return res.status(400).send("No files were uploaded.");
//   }
// });


require('./app/routes/photo.routes')(app);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
