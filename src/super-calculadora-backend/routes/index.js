const express = require('express');
const server = express();
const port = process.env.PORT || 5000;
server.use(express.json());
const lista = [];

server.get('/nome', (req, res) => 
{
    res.send({ nome: 'Andressa' });
});

server.get('/lista', (req, res) => 
{
    return res.json(lista);
});

server.post('/lista', checkKeyExists, (req, res) => {
    const { name } = req.body;
    lista.push(name);
    
    return res.json(lista); 
}); 

server.put('/lista/:index', checkKeyExists, (req, res) => {
    const { index } = req.params;
    const { name } = req.body;
    
    lista[index] = name;
    return res.json(lista);
});

server.delete('/lista/:index', (req, res) => {
    const { index } = req.params;
    
    lista.splice(index, 1);
    
    return res.send("Deletado");
});

function checkKeyExists(req, res, next) 
{
    if (!req.body.name) 
    {
        return res.status(400).json({ error: 'O parâmetro name é necessário' });
    }

    return next(); 
}

server.listen(port);

