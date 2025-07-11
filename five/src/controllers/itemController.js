const items = require('../model/itemModel');

exports.getAllItems = async (_, res) => {
    try {
        const allItems = await items.getAll();
        res.json(allItems);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getItemById = async (req, res) => {
    try {
        const item = await items.getItemById(req.params.id);
        if (!item) return res.status(404).send({ err: "Item not Found" });
        res.json(item);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createItem = async (req, res) => {
    try {
        const item = await items.createItem(req.body);
        if (!item) return res.status(400).send({ err: "Failed to create item" });
        res.status(201).json(item);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateItem = async (req, res) => {
    try {
        const item = await items.updateItemF(req.params.id, req.body);
        if (!item) return res.status(404).send({ err: "Item not Found" });
        res.json(item);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteItem = async (req, res) => {
    try {
        const success = await items.removeItem(req.params.id);
        if (!success) return res.status(404).send({ err: "Item not Found" });
        res.json({ msg: "Item deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

