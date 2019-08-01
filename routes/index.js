var express = require('express');
var router = express.Router();
var Cart = require('../models/cart');



var Product = require('../models/product');


/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find(function(err,docs){
    var productChunk=[];
    var chunkSize = 3;
    for(var i=0; i<docs.length; i+= chunkSize){
      productChunk.push(docs.slice(i, i+chunkSize));
    }
    res.render('index', { title: 'Shopping Cart', products:productChunk });
  });
  
});

router.get('/add-to-cart/:id', function(req,res,next){
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});
  Product.findOne({'id': productId}, function(err,product){
    if(err){
      return res.redirect('/')
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/');
  })
})

router.get('/shopping-cart', function(req,res,next){
  if(!req.session.cart){
    return res.render('shopping-cart', {products: null})
  }
  var cart = new Cart(req.session.cart);
  res.render('shopping-cart', {products: cart.generateArray(), totalPrice: cart.totalPrice} )
})

router.post('/checkout', isLoggedin, function(req,res,next){
  if(!req.session.cart){
    return res.redirect('/shopping-cart')
  }
  else{
    return res.redirect('/signin');
  }
})

router.get('/reduce/:id', function(req,res,next){
  var productId = parseInt(req.params.id);
  console.log(productId);
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  cart.reduceByOne(productId);
  req.session.cart = cart;
  res.redirect('/shopping-cart');
})


router.get('/checkout', isLoggedin, function(req,res,next){
  if(!req.session.cart){
    return res.redirect('/shopping-cart')
  }
})

function isLoggedin(req,res,next){
  if(req.isAuthenticated()){
      return next();
  }
  res.redirect('/user/signin');
}

module.exports = router;
