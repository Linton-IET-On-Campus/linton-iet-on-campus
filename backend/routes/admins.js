const router = require('express').Router();
const mongoose = require('mongoose');
const Admin = require('../models/admin.model');
const cors = require("cors");
const passport = require("passport");
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


router.route("/login").post((req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) throw err;
        if (!user) res.send("No Admin Exists");
        else {
            req.logIn(user, (err) => {
            if (err) throw err;
            res.send("Successfully Authenticated");
            console.log(req.user);
            });
        }
    })(req, res, next);
});


router.route('/register').post((req, res) => {
Admin.findOne({username: req.body.username}, async (err,doc) => {
    if(err) throw err;
        if(doc) res.send("Admin already exists");
            if(!doc) {
                const hashedPassword = await bcrypt.hash(req.body.password, 10);
                const newAdmin = new Admin({
                    username: req.body.username,
                    password: hashedPassword,
                });
                await newAdmin.save();
                res.send("Admin created");
            }
    });
});

router.route('/').get((req, res) => {
    Admin.find()
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
    });
    

module.exports = router;