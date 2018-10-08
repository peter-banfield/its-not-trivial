const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('This is the placeholder for the client landing page');
});

app.get('/gameboard', (req,res) => {
    res.send('this is a placeholder for the gameboard landing page')
});

app.listen(port, () => {
    console.log('listening on port '+port);
});