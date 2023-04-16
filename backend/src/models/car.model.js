const { Schema, model } = require("mongoose");

const CarSchema = new Schema({
  image: {
    type: String,
  },
  name: {
    type: String,
  },
  seats: {
    type: String,
  

  },
});

const CarModel = model("car", CarSchema);

module.exports = CarModel;
