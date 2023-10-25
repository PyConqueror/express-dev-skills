// controllers/developers.js
const Developer = require('../models/developers.js') 

module.exports = {
    index,
    show,
    new: newskill,
    create,
    delete: deleteSkill
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
    const skill = req.body.skill;
    Developer.create(req.params.id, skill);
    res.redirect('/skills/' + req.params.id)
}

function deleteSkill(req,res) {
    const skill = req.params.skill;
    const id = req.params.id;
    Developer.delete(id, skill)
    res.redirect('/skills/' + id)
} 