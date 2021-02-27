const express = require('express');
const { list, create, categoryById, remove } = require('../controllers/categoryContoller');
const router = express.Router();

// MVC = modelo vista Controlador

router.get('/categories', list)
router.post('/create', create)
router.delete('/:categoryId', remove)
router.param('categoryId', categoryById)

module.exports = router;

