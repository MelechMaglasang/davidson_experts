var mongoose = require("mongoose");

var expertSchema = new mongoose.Schema(
  {
    lastName: {
      type: String,
      maxLength: 100,
      required: [true, "can't be blank"]
    },
    firstName: {
      type: String,
      maxLength: 100,
      required: [true, "can't be blank"]
    },
    departments: {
      type: Array,
      required : [true, "can't be blank"]
    },

    education: {
      type: Array,

    }
    expertise: {
      type: Array,
      required : [true, "can't be blank"]
    },
    shortDesc: {
      type: String,
      required : [true, "can't be blank"]
    },
    email: {
      type: string,
      required : [true, "can't be blank"]
    },
    phone: {
      type: Int64,
    },
    location: {
      type: String,
    },
    keyWords: {
      type: Array,
    },
    topics: {
      type: Array,
    },
    links: {
      type: Array,
    },
    publications: {
      type: Array,
    },
  }
);

mongoose.model("Expert", expertSchema);
const Expert = mongoose.model("Expert");
