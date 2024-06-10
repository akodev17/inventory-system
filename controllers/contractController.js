const Contract = require('../models/contract');

exports.createContract = async (req, res) => {
    try {
        const contract = new Contract(req.body);
        await contract.save();
        res.status(201).send(contract);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getContracts = async (req, res) => {
    try {
        const contracts = await Contract.find().populate('listProducts.product');
        res.status(200).send(contracts);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getContractById = async (req, res) => {
    try {
        const contract = await Contract.findById(req.params.id).populate('listProducts.product');
        if (!contract) {
            return res.status(404).send();
        }
        res.status(200).send(contract);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateContract = async (req, res) => {
    try {
        const contract = await Contract.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!contract) {
            return res.status(404).send();
        }
        res.status(200).send(contract);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteContract = async (req, res) => {
    try {
        const contract = await Contract.findByIdAndDelete(req.params.id);
        if (!contract) {
            return res.status(404).send();
        }
        res.status(200).send(contract);
    } catch (error) {
        res.status(500).send(error);
    }
};
