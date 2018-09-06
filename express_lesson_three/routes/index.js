var express = require('express');
var router = express.Router();
var users = require('../models/users');

/* GET home page. */
// :id is a route parameter
// Gets object that matches the id
router.get('/person/:id', function(req, res, next) {
  let person = users.people.find(peep => {
    return peep.id === parseInt(req.params.id);
  });
  // Render the template with that object
  res.render('index', { person });
  console.log(req.url);
});


module.exports = router;
