const express = require('express');
const app     = express();
const port = 3000;

//Model
const Pokemon = require('./models/pokemon')
//Middleware
app.use(express.static(__dirname + '/public'));

//Stuffs
app.get('/pokemon', (req, res) => {
	res.render('index.ejs', {pokemon: Pokemon});
});






























app.listen(port, () => {
	console.log('listening on port 3000');
})