const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ImageSchema = new Schema(
  {
    title: String,
    img: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

ImageSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

const ImageModel = mongoose.model("image", ImageSchema);
module.exports = ImageModel;
