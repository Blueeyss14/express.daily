import express, { response } from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (request, response) => {
    response.status(201).send({msg: 'hello'});
});

app.use(express.json());

const users = [
    { id: 1, username: "orang" },
    { id: 2, username: "orang" },
    { id: 3, username: "orang" },
    { id: 4, username: "orang" },
];

app.get("/api/users/", (request, response,) => {
    response.send(users);
})

app.post("/api/users", (req, res) => {
    const { username } = req.body;
    const newUser = {
        id: users.length + 1,
        username: username
    };
    users.push(newUser);
    res.status(201).send(newUser);
});

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
});