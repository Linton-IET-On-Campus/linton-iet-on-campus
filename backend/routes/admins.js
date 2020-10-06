const router = require('express').Router();
const Admin = require('../models/admin.model');
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");

router.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));

router.use(session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true
}))

router.use(cookieParser("secretcode"))
router.use(passport.initialize());
router.use(passport.session());
require("./passportConfig")(passport);

router.route('/').get((req, res) => {
Admin.find()
    .then(admin => res.json(admin))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/register').post((req, res) => {
    Admin.findOne({email: req.body.email}, async (err,doc) => {
        if(err) throw err;
        if(doc) res.send("Admin already exists");
            if(!doc) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            const newAdmin = new Admin({
                email: req.body.email,
                password: hashedPassword,
            });
            await newAdmin.save();
            res.send("Admin created");
        }
    });
});

router.route("/login").post((req, res, next) => {
    passport.authenticate("local", function(err, admin, info) {
        if (err) throw err;
        if (!admin) res.send("No Admin Exists");
        else {
            req.logIn(admin, (err) => {
            if (err) throw err;
            res.send("Successfully Authenticated");
            console.log(req.admin);
            window.location = '/committees/add';
            });
        }
    })(req, res, next);
});

module.exports = router;