const express = require('express');
const router = express.Router();
const { auth } = require('../../middlewares/auth');
const { getAllCategories, createCategories } = require('../categories/controller');

router.get('/categories', auth, getAllCategories);
router.post('/categories', auth, createCategories);

module.exports = router;