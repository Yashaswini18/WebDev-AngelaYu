const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');

const fruitSchema = new mongoose.Schema({ //the db will follow this schema
  name: {
    type: String, 
    required: [true, "No name specified"] //name validator
  },
  rating: {
    type: Number,
    min: 1, //validator for rating
    max: 10
  },
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
  Age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit ({
  name: "Pineapple",
  rating: 9,
  review: "Great Fruit"
})
pineapple.save();

const mango = new Fruit({
  name: "mango",
  rating: 8,
  review: "Summer's Fruit"
})
mango.save();

// const = person= new Person ({
//   name: "Amy",
//   age: 12,
//   favouriteFruit: pineapple
// })

const person = new Person({
  name: "John",
  age: 12,
  favouriteFruit: mango
})

person.save()

// const kiwi = new Fruit({
//   name: "Kiwi",
//   rating: 10,
//   review: "Okayish"
// })

// const banana = new Fruit({
//   name: "Banana",
//   rating: 9,
//   review: "Sweet"
// })

// const defaultItems = [kiwi, banana]

// Fruit.insertMany(defaultItems).then(function(err){ //insert on the Fruit model
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all the fruits to fruitsDB")
//   }
// });

Fruit.find() //callbacks on model is deprecated, use then in the new way
.then(function(fruits){
  // if (err){ //commenting this as it's printing the whole database
  //   console.log(err)
  //   mongoose.connection.close()
  // }else {
   // mongoose.connection.close()
    fruits.forEach(function(fruit){
      console.log(fruit.name);
    })
    //}
  })

  Fruit.updateOne({_id: "64310a2a2412ed825e820ccd"}, {name: "peach"})
  .then(function(err){
    console.log("successfully updated documnet")
  })

  Fruit.deleteOne({name: "Kiwi"}, {_id: "64310a2a2412ed825e820ccd"})  //using Fruit collection and not Model
  .then(function(err){
    console.log("successfully deleted kiwi from database")
  })

  Person.deleteMany({name: "John"}) //deletes all occurances of John in the database
  .then(function(err){
    console.log("Successfully deleted all doc")
  })