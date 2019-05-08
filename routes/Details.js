var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var details = require('../models/detail.js');

router.get('/',function(req,res,next){
    details.find(function(err,products){
        if(err)return next(err)
        res.json(products);
    });
});

router.get('/:id',function(req,res,next){
    details.findById(req.params.id,function(err,post){
        if(err)return next(err);
        res.json(post);
    });
});

router.post('/', function(req, res, next) {
    details.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  
  router.put('/:id', function(req, res, next) {
    details.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
 
  router.delete('/:id', function(req, res, next) {
    details.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  module.exports = router;
  
