const express = require('express');
const server = express();
const port = process.env.PORT || 5000;
server.use(express.json());
const lista = [];

server.get('/soma', (req, res) => 
{
    return res.json(lista);
});

server.get('/teste', (req, res) => 
{
    res.send({ express: 'Hello From Express' });
});

server.post('/soma', checkKeyExists, (req, res) => {
    const { name } = req.body;
    lista.push(name);
    
    return res.json(lista); 
}); 

server.put('/soma/:index', checkKeyExists, (req, res) => {
    const { index } = req.params;
    const { name } = req.body;
    
    lista[index] = name;
    return res.json(lista);
});

server.delete('/soma/:index', (req, res) => {
    const { index } = req.params;
    
    lista.splice(index, 1);
    
    return res.send();
});

function checkKeyExists(req, res, next) 
{
    if (!req.body.name) 
    {
        return res.status(400).json({ error: 'name is required' });
    }

    return next(); 
}

server.listen(port);
