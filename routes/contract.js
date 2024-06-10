const express = require('express');
const contractController = require('../controllers/contractController');

const router = express.Router();

router.post('/', contractController.createContract);
router.get('/', contractController.getContracts);
router.get('/:id', contractController.getContractById);
router.put('/:id', contractController.updateContract);
router.delete('/:id', contractController.deleteContract);

module.exports = router;
