const express = require('express');

const app = express();

app.get("/", (req,res) => {
    res.json({
        message: "Oi"
    });
});

app.get('/produtos', (req, res) => {
    res.json( [{nome: 'celular'}, {nome:'tv'}, {nome: 'sofá'}])
})

const PORT = 3000;

app.listen(process.env.PORT || PORT, () => {
    console.log('Port' + PORT)
})
