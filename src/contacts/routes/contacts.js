var express = require('express');
var router = express.Router();
var con=[]
/* GET contacts */
router.get('/:id', function (req, res, next) {
    var i_d = req.params.id
    res.send(con[i_d])
});

router.post('/', function(req, res, next) {
    var len=con.length
    con[len] = req.body
    console.log(req.body);
	res.send(len.toString());
});
router.get('/:id/message/:mesg_id', function(req, res, next) {
	var id=req.params.id;
	var mesg_id = req.params.mesg_id;
	console.log(mesg_id);
	res.send(con[id].message[mesg_id]);
});

router.post('/:id/message',function( req, res, next){
		var id=req.params.id;
		var msglen= con[id].message.length;
		con[id].message[msglen]=req.body.message[0];
		res.send(''+msglen);
});


router.put('/:id', function(req, res, next) {
    var i_d = req.params.id
    con[i_d].firstName = req.body.firstName
    console.log(req.body);
    res.send(con[i_d])
});

module.exports = router;