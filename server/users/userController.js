var User = require('./userModel.js');
    Q = require('q');
    jwt = require('jwt-simple');

// Promisify a few mongoose methods with the `q` promise library
var findUser = Q.nbind(User.findOne, User);
var createUser = Q.nbind(User.create, User);
var findAllusers = Q.nbind(User.find, User);

module.exports = {

  // allUser : function (req,res,next) {
  //   findAllusers({})
  //     .then(function (users) {
  //       res.json(users);
  //     })
  //     .fail(function (err) {
  //       next(err);
  //     })
  // },



  // signin: function (req, res, next) {
  //   var username = req.body.username;
  //   var password = req.body.password;

  //   findUser({userName: username})
  //     .then(function (user) {
  //       if (!user) {
  //         next(new Error('User does not exist'));
  //       } else {
  //         return User.comparePasswords(password)
  //           .then(function (foundUser) {
  //             if (foundUser) {
  //               var token = jwt.encode(user, 'secret');
  //               res.json({token: token});
  //             } else {
  //               return next(new Error('No user'));
  //             }
  //           });
  //       }
  //     })
  //     .fail(function (error) {
  //       next(error);
  //     });
  // },


  // Test : Post
  // http://127.0.0.1:8000/api/users/signin
  // body :
  // {
  //   "username" : "admin",
  //   "password" : "admin"
  // }

  signin: function (req, res) {
    var username = req.body.username;
    var password = req.body.password;

    User.findOne({userName: username})
      .exec(function (error, user) {
        if(error){
          console.log(error);
          res.status(500).send(error);
        } else if (!user) {
          res.status(500).send(new Error('User does not exist'));
        } else {
          //console.log('hi')
          User.comparePassword(password,user.password, res, function(found){
            if(!found){
              res.status(500).send('Wrong Password');
            } else {
              var token = jwt.encode(user, 'secret');
              res.setHeader('x-access-token',token);
              res.json({token: token});
            }
          });
        }
      });
  },


  // Test 'Post'
  // http://127.0.0.1:8000/api/users/signup
  // Body : {
  //     "username" : "tawfik",
  //     "password" : "admin"
  // }

  signup : function(req, res) {
    var username = req.body.username;
    var password = req.body.password;

    User.findOne({ userName: username })
      .exec(function(err, user) {
        if (!user) {
          var newUser = new User({
            userName: username,
            password: password
          });
          newUser.save(function(err, newUser) {
            console.log(newUser)
            res.send(200,'done')
            //util.createSession(req, res, newUser);
          });
        } else {
          console.log('Account already exists');
          res.redirect('/signup');
        }
      });
  },

  checkAuth: function (req, res, next) {
    // checking to see if the user is authenticated
    // grab the token in the header is any
    // then decode the token, which we end up being the user object
    // check to see if that user exists in the database
    var token = req.headers['x-access-token'];
    if (!token) {
      next(new Error('No token'));
    } else {
      var user = jwt.decode(token, 'secret');
      findUser({username: user.username})
        .then(function (foundUser) {
          if (foundUser) {
            res.send(200);
          } else {
            res.send(401);
          }
        })
        .fail(function (error) {
          next(error);
        });
    }
  }
};
