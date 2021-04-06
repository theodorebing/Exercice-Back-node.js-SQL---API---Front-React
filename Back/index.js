require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./app/router');
const port = process.env.PORT || 5050;
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:8080',
};

app.use(cors(corsOptions));
app.use(express.json())
app.use(router);
app.listen(port, _ => {
   console.log(`http://localhost:${port}`);
});