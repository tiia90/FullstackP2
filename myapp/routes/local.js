var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render("pages/local", {
    new_heading: "This is last page",
    new_paragraph: "thank you"
  });
});

module.exports = router;
