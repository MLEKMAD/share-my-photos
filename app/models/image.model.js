module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        title: String,
        img:
        {
            data: Buffer,
            contentType: String
        }
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Image = mongoose.model("image", schema);
    return Image;
  };