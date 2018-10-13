const express = require('express');
const app = express();
const mongoose = require('mongoose');
 
mongoose.connect('mongodb://mymongo:27017', err => {
	if(err) {
		process.exit();
	}
	return app.listen(3003, () => console.log('server up (:'));
});

app.get('/test', (req, res) => res.send('ok'));
