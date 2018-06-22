// import './../controller/user'
// import './../models/user'
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  console.log(req.cookies);
  // next('route')
}, (req, res, next) => {
  console.log('/ show next');
});

router.get('/getnonce', function(req, res, next) {
  var nonce = {
    nonce: 'aghoagbaodfjahsf'
  }
  res.send(JSON.stringify(nonce));
  console.log(req.cookies);
  // next('route')
});

router.post('/post', function(req, res, next){
  console.log('------'+JSON.stringify(req.body));
  res.send('post success')
})

module.exports = router;
