const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Node.js on port 8092!');
});

app.listen(8092, () => {
    console.log('Server running on http://localhost:8092');
});
