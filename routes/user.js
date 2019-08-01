var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');

var csrfprotection = csrf();
router.use(csrfprotection);

router.get('/profile',isLoggedin, (req,res,next)=>{
    res.render('user/profile');
   });

   router.get('/logout', isLoggedin, function(req,res,next){
    req.logOut();
    res.redirect('/');
})   

router.use('/', notLoggedin, function(req,res,next){
    next();
})

router.get('/signup',(req,res,next)=>{
    var message = req.flash('error');
   res.render( 'user/signup',{csrfToken: req.csrfToken(), message: message, hasErrors: message.length > 0})
  })
  
  router.post('/signup', passport.authenticate('local.signup',{
    successRedirect: '/user/profile',
    failureRedirect: '/user/signup',
    failureFlash: true
  }));
  
  router.get('/signin', (req,res,next)=>{
    var message = req.flash('error');
    
   res.render( 'user/signin',{csrfToken: req.csrfToken(), message: message, hasErrors: message.length > 0})
  });
  
  router.post('/signin', passport.authenticate('local.signin',{
    successRedirect: '/user/profile',
    failureRedirect: '/user/signin',
    failureFlash: true
  }))
  
module.exports = router;

function isLoggedin(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
}

function notLoggedin(req,res,next){
    if(!req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
}

