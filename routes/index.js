// @flow
// import redisClient from '../db/redis';
var express = require('express');
var router = express.Router();

// redisClient.set("dddd key", "1234", console.log)
/* GET home page. */
router.get('/', function(req, res, next) {
  res.cookie('sid', '1hfo1h1ghhg1oh1oho448u8whrg')
  // console.log(res);
  console.log(req.cookies);
  var a = 1;
  // redisClient.get("string key", console.log);
  // redisClient.get("test.username", console.log);
  res.render('index', { title: 'Express' });
});

module.exports = router;
