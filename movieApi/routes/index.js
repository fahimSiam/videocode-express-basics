var express = require('express');
var router = express.Router();

const movies=require('../data/movies');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/most_popular',(req, res, next)=>{
  const results=movies.filter((movie)=>{
    return movie.most_popular;
  });
  res.json(results);
})

module.exports = router;
