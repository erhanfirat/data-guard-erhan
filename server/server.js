const express = require('express');
const axios = require('axios');
const cors = require('cors'); 

const app = express();

app.use(cors());

app.get('/search-repos', async (req, res) => {
    try {
        const query = req.query.q || ''; 
        const githubResponse = await axios.get(`https://api.github.com/search/repositories?q=${query}`);

        // API cevabını frontend'e dönüyoruz
        res.json(githubResponse.data);
    } catch (error) {
        res.status(500).send('Error fetching data from GitHub');
    }
});

// Sunucuyu başlat
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));