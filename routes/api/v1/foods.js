var express = require('express');
var router = express.Router();
var fetch = require("node-fetch");
var Food = require("../../../models").Food

/* GET all foods */
router.get("/", function(req, res, next) {
  res.setHeader("Content-Type", "application/json");
  Food.findAll()
  .then(foods => {
    res.status(200).send(JSON.stringify(foods));
  })
  .catch(error => {
    res.status(404).send({error})
  });
});

/* GET one food */
router.get("/:id", function(req, res, next) {
  res.setHeader("Content-Type", "application/json");
  Food.findOne({
    where: {id: req.params.id}
  })     .then(food => {
    if (food) {
      res.status(200).send(food)
    } else {
      res.status(404).send({message: "Food does not exist"})
    }
  });
});


router.post('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  Food.create({
    name: req.body.name,
    calories: req.body.calories
  })
  .then(food => {
    if (food) {
      res.status(201).send(food)
    } else {
      res.status(404).send({message: "Food cant be create"})
    }
  });
});

router.put('/:id', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  Food.findOne({ where: {id: req.params.id}})
  .then(food => {
    food.update({
      name: req.body.name,
      calories: req.body.calories
    })
    res.status(201).send(JSON.stringify(food));
  })
  .catch(error => {
    res.status(400).send({error})
  });
});

router.delete("/:id", function(req, res, next) {
  Food.destroy({
    where: {id: req.params.id}
  })    .then(food => {
    res.setHeader("Content-Type", "application/json");
    res.status(204).send(JSON.stringify(food));
  })
  .catch(error => {
    res.setHeader("Content-Type", "application/json");
    res.status(404).send({error})
  });
});


module.exports = router; //this should stay at the bottom of the file
