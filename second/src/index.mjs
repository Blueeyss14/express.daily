import express from 'express'
import dotenv from 'dotenv'

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`running on ${PORT}`)
})

app.get("/", (req, res) => {
    res.status(201).send({msg : "This is message"});
});

const dummy = [];

function apiKeyMiddleware(req, res, next) {
    const key = req.headers['x-api-key'];
    if (key === process.env.API_KEY) {
        next();
    } else {
        res.status(403).json({ msg: 'Wrong API Key' });
    }
}

app.get("/users", apiKeyMiddleware, (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    if (dummy.length > 0) {
        res.status(200).send(dummy);
    } else {
        res.status(200).send({ msg: "Data not created yet" });
    }
});

app.post("/users" ,(req, res) => {
    const { name } = req.body;
    const newUser = {
        id : dummy.length,
        name : name
    };
    dummy.push(newUser);
    res.status(201).json(newUser);
});

app.use((req, res) => {
    res.status(404).json({ msg: "Lu jelek" });
});


