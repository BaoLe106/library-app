const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3500;

const whitelist = ['http://localhost:3000', 'http://localhost:3500'];
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', require('./api/books'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));