const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
    res.status(201).send({msg: "This is message"});
})


app.listen(PORT, () => {
    console.log(`running on ${PORT}`)
});

