/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 var passport = require('passport');

 module.exports = {

   // login action will render the login view
   login: function (req, res) {
     res.view();
   },

   // logout action will logout using Passport
   // and redirect
   logout: function(req, res) {
     req.logout();
     res.redirect('/home');
   },
   test:function(req,res){
     if (!req.isSocket) {
          return res.badRequest();
        }
        sails.sockets.join(req.socket,'myroom');
        sails.sockets.broadcast('myroom','anevent',{message:'socketvvfdfffffff event!'});
      return res.json('vva');
   },
   // Here is were we specify our facebook strategy.
   // https://developers.facebook.com/docs/
   // https://developers.facebook.com/docs/reference/login/
   facebook: function(req, res) {
     console.log('auth/facebook');
     passport.authenticate('facebook',
                           { failureRedirect: '/login', scope: ['email','user_friends','user_actions.news'] },
                           function(err, user) {
                             console.log(' passport.authenticate,');
                             console.log('callback');
       req.logIn(user, function(err) {
         if (err) {
           console.log(err);
           res.view('500');
           return;
         }
         res.redirect('/home');
         return;
       });
     })(req, res);
   }

 };
