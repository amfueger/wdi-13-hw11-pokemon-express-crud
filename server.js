const express = require('express');
const app     = express();
const port = 3000;

//Model
const Pokemon = require('./models/pokemon')


app.get('/pokemon', (req, res) => {
	res.send(Pokemon);
});






























app.listen(port, () => {
	console.log('listening on port 3000');
})