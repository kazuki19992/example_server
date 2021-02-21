var express = require('express');
var router = express.Router();
var path = require('path')


/* GET users listing. */
router.post('/', function(req, res, next) {
  const data = req.body
  if(data.name === "userName" && data.pass === "password"){
    console.log("ログイン成功")
    res.sendFile(path.resolve('public/success.html'))
  }else{
    console.log("ログイン失敗")
    res.sendFile(path.resolve('public/failed.html'))
  }
});

module.exports = router;
