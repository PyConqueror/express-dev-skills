var express = require('express');
var router = express.Router();
var skillsController = require('../controllers/skills'); // Pointing to the new skills controller

// All actual paths start with "/skills"

// GET /skills
router.get('/', skillsController.index);

router.get('/new/:id', skillsController.new);
// GET /skills/:id
router.get('/:id', skillsController.show);

router.post('/create/:id', skillsController.create);

module.exports = router;
    