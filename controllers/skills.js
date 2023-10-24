// controllers/developers.js
const developers = require('../models/developers.js') 

module.exports = {
    index,
    show
};

function index(req, res) {
    res.render('skills/index', {  
        developers: developers.getAll()
    });
}

function show(req, res) {
    res.render('skills/show', {
        developer: developers.getOne(req.params.id)
    });
}
  