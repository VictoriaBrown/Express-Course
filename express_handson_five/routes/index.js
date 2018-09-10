var express = require('express');
var router = express.Router();
var sqlite = require('sqlite3').verbose();
var models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/playlists', function(req, res, next) {
  models.playlists.findAll({}).then(playlistsFound => {
    res.render('playlists', {playlists: playlistsFound});
  });
});

router.get('/playlists/:id', function(req, res, next) {
  let playlistId = parseInt(req.params.id);
  models.playlists
    .find({
      where: {
        PlaylistId: playlistId
      }
    })
    .then(playlist => {
      res.render('specificPlaylist', {
        playlist: playlist
      });
    });
});

router.post('/playlists', (req, res) => {
  models.playlists
    .findOrCreate({
      where: {
        Name: req.body.name,
        NumberOfTracks: req.body.numberOfTracks
      }
    })
    .spread(function(result, created) {
      if (created) {
        res.redirect('/playlists');
      } else {
        res.send('This playlist already exists!');
      }
    });
});

module.exports = router;
