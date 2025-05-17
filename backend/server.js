const connect = require('./connect');
const express = require('express');
const cors = require('cors');
const sections = require('./sectionRoutes');

const app = express();
const PORT = process.env.PORT_BACKEND || 3000;

app.use(cors());
app.use(express.json());
app.use(sections);

app.listen(PORT, () => {
    connect.connectToServer();
    console.log(`Server is running on port ${PORT}`);
});
