const multer = require("multer");
const fs = require('fs-extra')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let path = `./public/uploads`;
    fs.mkdirsSync(path);
    cb(null, path)
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname  );
  },
});

const upload = multer({ storage: storage });

module.exports = (app) => {
  const photos = require("../controllers/photo.controller.js");

  var router = require("express").Router();

  // Create a new photo
  router.post("/", upload.single('photo'), photos.create);

  // Comment to a photo
  router.post("/:id/comment", photos.comment);

  // Retrieve all photos
  router.get("/", photos.findAll);

  // Get photos by comment
  router.get("/comment", photos.findByComment);

  // Retrieve a single photo with id
  router.get("/:id", photos.findOne);

  // Update a photo with id
  router.put("/:id", photos.update);

  // Delete a photo with id
  router.delete("/:id", photos.delete);

  // Create a new photo
  router.delete("/", photos.deleteAll);

  app.use("/api/photos", router);
};
