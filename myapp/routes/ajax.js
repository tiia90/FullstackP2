var express = require('express');
const app = require('../app');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("pages/ajax", {
    new_heading: "Get data from this page",
    new_paragraph: "try it out!"
  });

});




module.exports = router;
