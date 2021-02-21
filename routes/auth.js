var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(req.body);
  const data = req.body
  if(data.name === "userName" && data.pass === "password"){
    console.log("ログイン成功")
    res.send("Login success!")
  }else{
    console.log("ログイン失敗")
    res.send("Login failed...")
  }
});

module.exports = router;
