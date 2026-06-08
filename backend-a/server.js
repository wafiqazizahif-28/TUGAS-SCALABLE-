const express = require("express");

const app = express();

app.get("/", (req, res) => {

    setTimeout(() => {

        res.send(`
            <h1>Portal Akademik</h1>
            <h2>Backend A</h2>
            <p>Menu KRS Mahasiswa</p>
        `);

    }, 1000);

});

app.listen(3000);