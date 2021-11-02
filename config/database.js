const mongoose = require("mongoose");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect("mongodb+srv://db-super:DUFeC0kFhHZASvoD@cluster0.hbvdn.mongodb.net/bulljs-poc", options, ()=> {
  console.log('connected with db..')
});