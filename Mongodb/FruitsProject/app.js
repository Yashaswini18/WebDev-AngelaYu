const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Good"
});

//fruit.save() //save it once or it'll add the same data again and again

const personSchema = new mongoose.Schema({
  name: String,
  Age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "Yashu",
  Age: 7
});

person.save()