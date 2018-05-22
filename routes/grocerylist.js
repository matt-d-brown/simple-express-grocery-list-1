var express = require('express');
var router = express.Router();

/* GET grocerylist page. */
router.get('/', function(req, res, next) {
  
  var jsondata = require('../data/groceries.json');
  
  // console.log(jsondata);
  // console.log(jsondata[3]);
  
  res.render('grocerylist', { title: 'Grocery List', jsondata: jsondata });
});

module.exports = router;
