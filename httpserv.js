var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/api/fbfriends', function (req, res, next) {
    res.status(200).send(JSON.stringify({"status" : "success"}));
    next();
});

app.post('/api/wallpost', function (req, res, next) {
    q = req.body.question;
    console.log(q);
    res.status(200).send(JSON.stringify({resp: "I am good"}));
    next();
});

app.listen(2300, function() {
	console.log("Listening at 2300");
});
