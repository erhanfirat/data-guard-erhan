const express = require('express');
const axios = require('axios');
const cors = require('cors'); 

const app = express();

app.use(cors());

app.get('/search-repos', async (req, res) => {
    try {
      console.log("req.query > ", req.query);
      const query = req.query.q || ''; 
      const githubResponse = await axios.get(`https://api.github.com/search/repositories`, 
        { 
          params: {
            q: query, 
            sort: "stars",
            per_page: 100
          }
        });

      res.json(githubResponse.data);
    } catch (error) {
        res.status(500).send('Error fetching data from GitHub');
        console.log(error);
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));