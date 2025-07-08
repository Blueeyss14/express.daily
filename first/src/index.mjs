import express, { response } from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (request, response) => {
    response.status(201).send({msg: 'hello'});
});

const users = [
    { id: 1, username: "orang" },
    { id: 2, username: "orang" },
    { id: 3, username: "orang" },
    { id: 4, username: "orang" },
];

app.get("/api/users/", (request, response,) => {
    response.send(users);
})

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
});