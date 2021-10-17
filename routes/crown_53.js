var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown_53', { title: 'Express' ,name:'Zachary',id:'204410053'});
});

module.exports = router;
