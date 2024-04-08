const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve the index.html file at the root endpoint
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

/*************************************
* DIRECTIONS for Node Express Set Up *
* -> navigate to CSC-317-climate-change-info-site directory (e.g. cd ...)
* -> run `npm install express` 
* -> run node server_node_express.js
* -> open browser and navigate to http://localhost:3000
*************************************/