const express = require('express');
const fetch = require('node-fetch'); // Install 'node-fetch' for API calls (or use native fetch if you're in Node 18+)

const app = express();
const port = 3000;

app.use(express.static('public'));  // Serve the frontend from 'public' directory

// Simple API endpoint for search
app.get('/api/search', async (req, res) => {
    const query = req.query.query;

    // Simulate AI search by returning mock data or API response
    const result = `You searched for: ${query}. (This is where AI logic would go.)`;

    res.json({ result });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
