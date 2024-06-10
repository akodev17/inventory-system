const Inventory = require('../models/inventory');
const Contract = require('../models/contract');
const Product = require('../models/product');

let uniqueNumberCounter = 1;

exports.createInventory = async (req, res) => {
    try {
        const { contract, product } = req.body;
        const uniqueNumber = String(uniqueNumberCounter).padStart(7, '0');
        uniqueNumberCounter++;

        const inventory = new Inventory({ contract, product, uniqueNumber });
        await inventory.save();
        res.status(201).send(inventory);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getInventories = async (req, res) => {
    try {
        const inventories = await Inventory.find().populate('contract product');
        res.status(200).send(inventories);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getInventoryById = async (req, res) => {
    try {
        const inventory = await Inventory.findById(req.params.id).populate('contract product');
        if (!inventory) {
            return res.status(404).send();
        }
        res.status(200).send(inventory);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateInventory = async (req, res) => {
    try {
        const inventory = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!inventory) {
            return res.status(404).send();
        }
        res.status(200).send(inventory);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteInventory = async (req, res) => {
    try {
        const inventory = await Inventory.findByIdAndDelete(req.params.id);
        if (!inventory) {
            return res.status(404).send();
        }
        res.status(200).send(inventory);
    } catch (error) {
        res.status(500).send(error);
    }
};
