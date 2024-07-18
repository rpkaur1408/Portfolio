const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// Serve static files
app.use(express.static(__dirname + '/public'));
// Routes
app.get('/', (req, res) => {
    res.redirect('/about');
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/about.html'));
});

app.get('/articles', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/articles.html'));
});

app.get('/contactMe', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/contactMe.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/notes.html'));
});

// 404 handler
app.use((req, res) => {
    res.status(404).send('404: Page Not Found');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
