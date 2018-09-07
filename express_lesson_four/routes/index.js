var express = require('express');
var router = express.Router();
const sqlite = require('sqlite3').verbose();


const db = new sqlite.Database('./chinook.sqlite', err => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Yay! You are connected to the database!');
});
const artistList = `SELECT * from artists`;
const newArtist = db.prepare(`INSERT INTO artists(Name) VALUES(?)`);
const query = `SELECT * from artists LIMIT 10`;


router.get('/artist', function(req, res, next) {
  db.all(artistList, function(err, row) {
    res.render('artist', {
      artists: row
    });
  });
});



db.all(query, (err, row) => {
  if (err) throw err;
  console.log(row);
});

router.get('/artist/:id', function(req, res, next) {
  let artist = parseInt(req.params.id);
  console.log(artist);

  let idQuery = `SELECT * FROM artists WHERE ArtistID=${artist}`;
  console.log(idQuery);

  db.all(idQuery, (err, row) => {
    console.log(row);
    if (row.length > 0) {
      res.render('index', {
        artist: row[0]
      });
    } else {
      res.send('not a valid id');
    }
  });
});

router.post('/artist', function(req, res, next) {
  console.log(req.body.name);
  const addArtist = req.body.name;

  const selectArtist = `SELECT * FROM artists WHERE artists.name = '${addArtist}'`;

  db.all(selectArtist, function(err, row) {
    if (row.length > 0) {
      res.send('Sorry, that artist already exists');
    } else {
      newArtist.all(addArtist, function(err, row) {
        if (err) {
          res.render('/error', { message: 'Oops, something went wrong!' });
        } else {
          res.redirect('/artist');
        }
      });
    }
  });
});

module.exports = router;
