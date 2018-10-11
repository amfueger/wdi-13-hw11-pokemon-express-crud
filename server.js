const express = require('express');
const app     = express();
const port = 3000;

//Model
const Pokemon = require('./models/pokemon')
//Middleware
app.use(express.static('public'));

//Stuffs
app.get('/pokemon', (req, res) => {
	res.render('index.ejs', {pokemon: Pokemon});
});

app.get('/pokemon/:id', (req, res) => {
	res.render('show.ejs', {
		pokemon: Pokemon[req.params.id]
	});
});


app.listen(port, () => {
	console.log('listening on port 3000');
})