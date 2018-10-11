
const express = require('express');
const router = express.Router();

const Pokemon = require('../models/pokemon')
//Stuffs
router.get('/', (req, res) => {
	res.render('index.ejs', {pokemon: Pokemon})
});

router.get('/:id', (req, res) => {
	res.render('show.ejs', {
		pokemon: Pokemon[req.params.id]
	});
});

router.post('/', (req, res) => {
	Pokemon.push(req.body)
	res.redirect('/pokemon')
});


router.get('/new', (req, res) => {
	res.render('new.ejs')
});

//Delete
router.delete('/:id', (req, res) => {
	Pokemon.splice(req.params.id, 1),
	res.direct('/pokemon')
});

//edit route established
router.get('/:id/edit', (req, res) => {
	res.render('edit.ejs', {
		pokemon: Pokemon[req.params.id]
	});
});


//edit route
router.put('/:id', (req, res) => {
	Pokemon[req.params.id] = req.body;
	res.redirect('/pokemon' + [req.params.id])
})
















module.exports = router;