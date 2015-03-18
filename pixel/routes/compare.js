var express = require('express');
var router = express.Router();
var read = require('node-read');
var $ = require('jquery');


read('http://www.baidu.com', function(err, article, res) {



    /* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('compare', { 
      title: '对比',
      content: article.content
    });
  });


  // Title
  //console.log(article.title);

  // HTML 
  // console.log(article.html);

  // DOM
  // console.log(article.dom);

});



module.exports = router;