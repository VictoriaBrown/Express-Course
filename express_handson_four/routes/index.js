var express = require('express');
var router = express.Router();
const sqlite = require('sqlite3').verbose();

const db = new sqlite.Database('./chinook.sqlite', err => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the database.');
});

// VARIABLES:
const albumList = `SELECT * FROM albums`;


// /albums and lists out all albums
router.get('/albums', function(req, res, next) {
  db.all(albumList, function(err, row) {
    res.render('albums', {
      albums: row
    });
  });
});

// albums/id - shows that specific album
router.get('/albums/:id', function(req, res, next) {
  let album = parseInt(req.params.id);
  console.log(album);
  let idQuery = `SELECT * FROM albums WHERE AlbumId=${album}`;

  db.all(idQuery, (err, row) => {
    console.log(row);
    if (row.length > 0) {
      res.render('specificAlbum', {
        album: row[0]
      });
    } else {
      res.send('not a valid id');
    }
  });
});

module.exports = router;
