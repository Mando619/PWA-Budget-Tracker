let mongoose = require("mongoose");
let db = require("../models");


mongoose.connect("mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});


let budgetTrackerSeed = [
    {
        name: "Pay Check",
        value: 2500,
        date: new Date().setDate(new Date().getDate()-9)
    }
]

db.Transaction.deleteMany({})
  .then(() => db.Transaction.collection.insertMany(budgetTrackerSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
