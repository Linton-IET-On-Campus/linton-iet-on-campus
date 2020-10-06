const Admin = require('../models/admin.model');
const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
  passport.use(
    new localStrategy((email, password, done) => {
      Admin.findOne({ email: email }, (err, admin) => {
        if (err) throw err;
        if (!admin) return done(null, false);
        bcrypt.compare(password, admin.password, (err, result) => {
          if (err) throw err;
          if (result === true) {
            return done(null, admin);
          } else {
            return done(null, false);
          }
        });
      });
    })
  );

  passport.serializeUser((admin, cb) => {
    cb(null, admin.id);
  });

  passport.deserializeUser((id, cb) => {
    Admin.findOne({ _id: id }, (err, admin) => {
      const adminInformation = {
        email: admin.email,
      };
      cb(err, adminInformation);
    });
  });
};