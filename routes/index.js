var express = require('express');
const { NotExtended } = require('http-errors');
var router = express.Router();

const isOpen=(req,res,next)=>{
  const currentHour=new Date().getHours();
  if(9<currentHour && currentHour<17){
    next();
  }else{
    res.render('isOpen');
  }
}

/* GET home page.*/
router.get('/',isOpen, function(req, res) {
  res.render('index', { title: 'home' });
});
router.get('/contact',isOpen, function(req, res) {
  res.render('contactUs', { title: 'You can Find Here our Contact' });
});
router.get('/services',isOpen, function(req, res) {
  res.render('ourServices', { title: 'These are our services' });
});

module.exports = router;
