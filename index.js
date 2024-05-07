const express = require('express');
const app = express();
const port = 3000;

app.get('/convert', (req, res) => {
    const fahrenheit = parseFloat(req.query.fahrenheit);
    
    if (isNaN(fahrenheit)) {
        return res.status(400).json({ error: 'Invalid input. Please provide a valid Fahrenheit value.' });
    }

    const celsius = (fahrenheit - 32) * (5/9);
    res.json({ celsius: celsius });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});