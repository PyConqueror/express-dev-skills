// controllers/developers.js
const Developer = require('../models/developers.js') 

module.exports = {
    index,
    show,
    new: newskill,
    create
};

function index(req, res) {
    res.render('skills/index', {  
        developers: Developer.getAll()
    });
}

function show(req, res) {
    res.render('skills/show', {
        developer: Developer.getOne(req.params.id)
    });
}

function newskill(req,res) {
    res.render('skills/new', {
        id: req.params.id
    });
}

function create(req,res) {
    Developer.create(req.params.id, req.body);
    res.redirect('/skills/' + req.params.id)
}