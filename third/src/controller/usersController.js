const Users = require('../model/Users');

exports.getAllUsers = (req, res) => {
    res.json(Users.getAll());
};

exports.getUserById = (req, res) => {
    const user = Users.getById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
};

exports.createUser = (req, res) => {
    const user = Users.create(req.body);
    res.status(201).json(user);
};

exports.updateUser = (req, res) => {
    const user = Users.update(req.params.id, req.body);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
};

exports.deleteUser = (req, res) => {
    const success = Users.delete(req.params.id);
    if (!success) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User deleted' });
}; 