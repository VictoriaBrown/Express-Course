var express = require('express');
var router = express.Router();
var story = require('../models/storyLine');

/* GET home page.*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Get the Beginning
router.get('/beginning', function(req, res, next) {
  let part = story.storyLine.find(section => {
    return section.storyPart === "beginning";
  });
  res.render('beginning', { part });
});

// Get the Middle
router.get('/middle', function(req, res, next) {
  let part = story.storyLine.find(section => {
    return section.storyPart === "middle";
  });
  res.render('middle', { part });
});

// Get the End
router.get('/end', function(req, res, next) {
  let part = story.storyLine.find(section => {
    return section.storyPart === "end";
  });
  res.render('end', { part });
});

module.exports = router;

