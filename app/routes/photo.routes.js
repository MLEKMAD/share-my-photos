const multer = require('multer');
  
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '/public/images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
  
const upload = multer({ storage: storage });

module.exports = app => {
    const photos = require("../controllers/photo.controller.js");
  
    var router = require("express").Router();
  
    // Create a new photo
    router.post("/",upload.single('image'), photos.create);
  
    // Retrieve all photos
    router.get("/", photos.findAll);
  
    // Retrieve a single photo with id
    router.get("/:id", photos.findOne);
  
    // Update a photo with id
    router.put("/:id", photos.update);
  
    // Delete a photo with id
    router.delete("/:id", photos.delete);
  
    // Create a new photo
    router.delete("/", photos.deleteAll);
  
    app.use('/api/photos', router);
  };