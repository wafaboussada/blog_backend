const router = require('express').Router();
const { createCategory, readCategories } = require('../controllers/category');

router.get('/', readCategories);
router.post('/', createCategory);


module.exports = router;