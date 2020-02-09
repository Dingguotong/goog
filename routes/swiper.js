/**
 * Created by lenovo on 2019/10/31.
 */
var express = require('express');
var router = express.Router();
var data=require('../public/json/swiper.json');


/* GET home page. */
router.get('/', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    res.json(data);
});

module.exports = router;