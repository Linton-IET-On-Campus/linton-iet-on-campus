const e = require('express');
const User = require('../../models/test/User');
const UserSession = require('.././models/UserSession');

module.exports = (app) => {
    app.post('/account/signup', (req, res, next) => {
        const { body } = req;
        const {
            firstName,
            lastName,
            password
        } = body;
        let {
            email
        } = body;

        if (!firstName){
            return res.send({
                success: false,
                message: 'Error: First name cannot be blank.'
            });
        }

        if (!lastName) {
            return res.send({
                success: false,
                message: 'Error: Last name cannot be blank.'
            });
        }

        if (!email) {
            return res.send({
                success: false,
                message: 'Error: Email cannot be blank.'
            });
        }

        if (!password) {
            return res.send({
                success: false,
                message: 'Error: Password cannot be blank.'
            });
        }

        console.log('here');

        email = email.toLowerCase();

        User.find({
            email: email,
        }, (err, previousUsers) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: Server error.'
                });
            } else if (previousUsers.length > 0) {
                return res.send({
                    success: false,
                    message: 'Error: Account already exist.'
                });
            }

            // Save the new user
            const newUser = new User();
            newUser.email = email;
            newUser.firstName = firstName;
            newUser.lastName = lastName;
            newUser.password = newUser.generateHash(password);
            newUser.save((err, user) => {
                if (err){
                    return res.send({
                        success: false,
                        message: 'Error: Server error.'
                    });
                }
                return res.send({
                    success: true,
                    message: 'Signed up.'
                });
            });
        });

    });

    app.post('/account/signin', (req, res, next) => {
        const { body } = req;
        const{
            password
        } = body;
        let {
            email
        } = body;


        
        if (!email) {
            return res.send({
                success: false,
                message: 'Error: Email cannot be blank.'
            });
        }

        if (!password) {
            return res.send({
                success: false,
                message: 'Error: Password cannot be blank.'
            });
        }

        email = email.toLowerCase();
        
        User.find({
            email: email
        }, (err, users) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: Server error.'
                });
            }
            if (users.length != 1){
                return res.send({
                    success: false,
                    message: 'Error: Invalid.'
                });
            }

            const user = user[0];
            if (!user.validPassword(password)) {
                return res.send({
                    success: false,
                    message: 'Error: Invalid.'
                });
            }

            // Otherwise correct user
            const UserSession = new UserSession();
            UserSession.userId = user._id;
            UserSession.save((err, doc) => {
                if (err) {
                    console.log(err);
                    return res.send({
                        success: false,
                        message: 'Error: Server error.'
                    });
                }

                return res.send({
                    success: true,
                    message: 'Valid sign in',
                    token: doc._id
                });
            });

        });

    });

    app.get('/account/verify', (req, res, next) => {
        // Get the token
        const { query } = req;
        const { token } = query;
        // ?token = test

        // Verify the token is one of a kind and it's not deleted.
        UserSession.find({
            _id: token,
            isDeleted: false
        }, (err, sessions) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: Server error'
                })
            }

            if (sessions.length != 1) {
                return res.send({
                    success: false,
                    message: 'Error: Invalid'
                });
            }else {
                return res.send({
                    success: true,
                    message: 'Good'
                });
            }
        });

    });

    app.get('/account/logout', (req, res, next) => {
        //get the token
       const { query } = req;
       const { token } = query;
     
       UserSession.findOneAndUpdate({
         _id: token,
           isDeleted: false
         }, {
           $set: {
             isDeleted: true
           }
         }, null, (err, sessions) => {
           if(err) {
             return res.send({
               success: false,
               message: 'Error: Server error'
             });
           }
           return res.send({
             success: true,
             message: 'Good'
           });
         });
      });
};