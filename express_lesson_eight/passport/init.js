var github = require('./github');
var models = require('../models');

module.exports = function(passport) {
    // This is required so Passport can support persistent login sessions

    passport.serializeUser(function(user, done) {
        console.log('Serializing user: ');
        done(null, user.UserId);
    });

    passport.deserializeUser(function(id, done) {
        console.log('Deserializing user: ');
        models.users
        .find({
            where: {
                UserId: id
            }
        })
        .then(user => {
            done(null, user);
        })
        .catch(err => done(err, null));
    });
};