const express = require("express");

const app = express();

app.get("/", (req, res) => {

    setTimeout(() => {

        res.send(`
            <h1>Portal Akademik</h1>
            <h2>Backend C</h2>
            <p>Menu Nilai Mahasiswa</p>
        `);

    }, 5000);

});

app.listen(3000, () => {
    console.log("Backend C Running");
});