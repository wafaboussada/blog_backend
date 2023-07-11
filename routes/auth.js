const { register, login } = require('../controllers/auth');

const router = require('express').Router();
// const { register } = require('../controllers/auth');


router.post('/register', register);
router.post('/login', login);



module.exports = router;