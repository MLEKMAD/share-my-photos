const Image = require("../models/image.model");

const saveImage = async (title, image) => {
  await Image.create({
    title,
    image,
  });
};
// Create and Save a new Image
exports.create = async (req, res) => {
  if (!req.files) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  if (!Array.isArray(req.files.filename)) {
    try {
      const {name,data} = req.files.filename;
      const image = await saveImage(name, data);
      res.status(200).send(image);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  } else {
    try {
      req.files.filename.forEach(async (file) => {
        const image = saveImage(file.name, file.data)
      });
      res.status(200).send("images were created successfully");
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
};

// Retrieve all Images from the database.
exports.findAll = (req, res) => {
  Image.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving images.",
      });
    });
};

// Find a single Image with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Image.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Image with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Image with id=" + id });
    });
};

// Update a Image by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }
  console.log("req: ", req.files);
  const id = req.params.id;
  const newImage = {
    title: req.files.filename.name,
    img: {
      data: req.files.data,
      contentType: "image/png",
    },
  };
  Image.findByIdAndUpdate(id, newImage, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Image with id=${id}. Maybe Image was not found!`,
        });
      } else res.send({ message: "Image was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Image with id=" + id,
      });
    });
};

// Delete a Image with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Image.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Image with id=${id}. Maybe Image was not found!`,
        });
      } else {
        res.send({
          message: "Image was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Image with id=" + id,
      });
    });
};

// Delete all Images from the database.
exports.deleteAll = (req, res) => {
  Image.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} Images were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Images.",
      });
    });
};