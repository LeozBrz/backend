const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get("/", (req,res) => {
    res.json({
        message: "Olá"
    });
});


app.get('/produtos', (req, res) => {

    res.json( [{nome: 'Bebidas'}, {nome:'Comida'}, {nome: 'Tabacaria'}])
})

const PORT = 3000;

app.listen(process.env.PORT || PORT, () => {
    console.log('Port' + PORT)
})
