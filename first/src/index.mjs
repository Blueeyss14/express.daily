import express, { response } from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (request, response) => {
    response.status(201).send({msg: 'hello'});
});

app.use(express.json());

const users = [
    { id: 0, username: "orang", test: "yahah"},
    { id: 1, username: "orang", test: "yahah"},
    { id: 2, username: "orang", test: "yahah"},
    { id: 3, username: "orang", test: "yahah"},
];

app.get("/api/users/", (request, response) => {
    response.setHeader('Content-Type', 'application/json');
    response.send(users);
});

app.post("/api/users", (req, res) => {
    const requiredFields = ['username', 'test'];
    const emptyField = requiredFields.some(field => !req.body[field]);

    if (emptyField) {
        return res.status(400).json({ error: "cannot be empty" });
    }

    const { username, test } = req.body;
    const newUser = {
        id: users.length,
        username: username,
        test: test
    };
    users.push(newUser);
    res.status(201).json(newUser);
});


app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
});