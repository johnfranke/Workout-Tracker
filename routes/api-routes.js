//Require all files in models folder
const db = require("../models/index");
// Require mongoose
const mongoose = require("mongoose");
// Creating a variable abbreviation for the mongoose schema type objectid
var ObjectId = mongoose.Types.ObjectId;

module.exports = function(app) {
  // GET route for all workouts
  app.get("/api/workouts", function(req, res) {
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  // GET route for workout data from a specific range
  app.get("/api/workouts/range", function(req, res) {
    db.Workout.find({})
      .sort({ day: 1 })
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  // GET route for specific workout by ID
  app.get("/api/workouts/:id", function(req, res) {
    db.Workout.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  //POST route to post into workouts
  app.post("/api/workouts", function(req, res) {
    // Create a new workout using the workout model
    const workout = new db.Workout();
    db.Workout.create(workout)
      .then(dbWorkout => {
        // Return a json object with the result if successful
        res.json(dbWorkout);
      })
      .catch(err => {
        // return a json object with any caught errors
        res.json(err);
      });
  });

  //PUT route to update an existing workout with new exercises
  app.put("/api/workouts/:id", function(req, res) {
    var query = { _id: req.params.id };
    db.Workout.findOneAndUpdate(
      query,
      {
        $push: { exercises: [req.body] }
      },
      function(err, dbWorkout) {
        if (err) {
          res.json(err);
        } else {
          res.json(dbWorkout);
        }
      }
    );
  });
};