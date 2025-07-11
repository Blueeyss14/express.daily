const items = require('../model/itemModel');

exports.getAllItems = (_, res) => {
    const allItems = items.getAll();
    res.json(allItems);
};

/** 
 * @param {import('express').Request<{ id: string }>} req 
 *  @param {import('express').Response} res 
 */

exports.getItemById = (req, res) => {
    const item = items.getItemById(req.params.id);
    if (!item) return res.status(404).send({err: "Item not Found"});
    res.json(item);
}

/**
 * @param {import('express').Request<any, any, { name: string, email: string }>} req
 * @param {import('express').Response} res
 */

exports.createItem = (req, res) => {
    const item = items.createItem(req.body);
    if (!item) return res.status(400).send({err: "Failed to create item"});
   res.status(201).json({
    msg: "yo gg",
    data: item,
   });

}

/**
 * @param {import('express').Request<{ id: string }, any, { name: string, email: string }>} req
 * @param {import('express').Response} res
 */

exports.updateItem = (req, res) => {
    const item = items.updateItemF(req.params.id, req.body);
    if (!item) return res.status(404).send({err: "Item not Found"});
    res.json(item);
}

exports.deleteItem = (req, res) => {
    const success = items.removeItem(req.params.id);
    if (!success) return res.status(404).send({err: "Item not Found"});
    res.json({msg: "Item deleted"});
}

