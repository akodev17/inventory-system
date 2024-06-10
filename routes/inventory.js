const express = require('express');
const inventoryController = require('../controllers/inventoryController');

const router = express.Router();

router.post('/', inventoryController.createInventory);
router.get('/', inventoryController.getInventories);
router.get('/:id', inventoryController.getInventoryById);
router.put('/:id', inventoryController.updateInventory);
router.delete('/:id', inventoryController.deleteInventory);

module.exports = router;
