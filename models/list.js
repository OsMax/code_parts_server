const { Schema, model } = require("mongoose");
const Joi = require("joi");

const MongooseError = require("../helpers/MongoosError");

const listSchema = new Schema(
  {
    item: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

listSchema.post("save", MongooseError);

const List = model("list", listSchema);

module.exports = { List };
