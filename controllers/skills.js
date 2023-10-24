// controllers/developers.js
const Developer = require('../models/developers.js') 

module.exports = {
    index,
    show
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
  