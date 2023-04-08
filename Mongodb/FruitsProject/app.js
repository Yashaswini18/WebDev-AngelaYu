const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');

const fruitSchema = new mongoose.Schema({ //the db will follow this schema
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema); //create new collection call fruits, fruit is made plural

const fruit = new Fruit({ //add data into collection
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

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 10,
  review: "Okayish"
})

const banana = new Fruit({
  name: "Banana",
  rating: 9,
  review: "Sweet"
})

const defaultItems = [kiwi, banana]

Fruit.insertMany(defaultItems).then(function(err){
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully saved all the fruits to fruitsDB")
  }
});