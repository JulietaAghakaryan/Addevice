var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
   res.send('Hello world from GET route');
});
router.post('/', function(req, res){
   res.send('POST route');
});

module.exports = router;