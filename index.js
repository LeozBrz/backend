const express = require('express');

const app = express();

app.get("/", (req,res) => {
    res.json({
        message: "Albeer Bebidas com participação especial de cocó tese, venha conhecer"
    });
});

const PORT = 3000;

app.listen(process.env.PORT || PORT, () => {
    console.log('Port' + PORT)
})
