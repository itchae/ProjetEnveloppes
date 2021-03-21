var express = require('express');
var router = express.Router();
var guichet_controller = require('../controllers/guichetController');

// Home page route.
router.get('/', guichet_controller.guichet_details);

// About page route.
router.get('/total', guichet_controller.guichet_total);

router.post('/', guichet_controller.guichet_add);

module.exports = router;