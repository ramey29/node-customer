const mongoose = require("mongoose");
const Joi = require("joi");

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 70,
    lowercase: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    min: 1,
    max: 149,
    get: (v) => Math.round(v),
    set: (v) => Math.round(v),
    match: /\d/,
  },
  isActive: { type: Boolean, default: false },
  address: [
    {
      street: { type: String, lowercase: true, minlength: 5, maxlength: 300 },
      city: { type: String, lowercase: true, minlength: 2, maxlength: 60 },
      state: { type: String, lowercase: true, minlength: 2, maxlength: 60 },
      country: { type: String, lowercase: true, minlength: 4, maxlength: 60 },
      zip: { type: Number, min: 6 },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

const Customer = mongoose.model("Customer", customerSchema);

const validateCustomer = (data) => {
  const Schema = Joi.object({
    name: Joi.string().min(1).max(70).required(),
    age: Joi.number().integer().min(1).max(149).required(),
    date: Joi.date().iso(),
    isActive: Joi.boolean().default(false),
    address: Joi.array()
      .max(4)
      .items(
        Joi.object({
          street: Joi.string().min(5).max(300),
          city: Joi.string().min(2).max(60),
          state: Joi.string().min(2).max(60),
          country: Joi.string().min(4).max(60),
          zip: Joi.number().min(6).integer(),
        })
      ),
  });
  return Schema.validate(data);
};

module.exports = { Customer, validate: validateCustomer };
