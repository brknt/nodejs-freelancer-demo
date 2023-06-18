const express = require('express');
const portfolioController = require('../controllers/portfolioController');

const router = express.Router();

router.post('/', portfolioController.createPortfolio);
router.delete('/:id', portfolioController.deletePortfolio);
router.get('/edit/:id', portfolioController.getEditPage);
router.put('/:id', portfolioController.updatePortfolio);





module.exports = {
    routes:router
};