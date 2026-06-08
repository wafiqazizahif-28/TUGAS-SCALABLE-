const express = require("express");

const app = express();

app.get("/", (req, res) => {

    setTimeout(() => {

        res.send(`
            <h1>Portal Akademik</h1>
            <h2>Backend B</h2>
            <p>Menu Jadwal Kuliah</p>
        `);

    }, 3000);

});

app.listen(3000);