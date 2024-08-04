
require('dotenv').config()
const port=process.env.PORT;
const express = require('express');
const userrouter=require('./router/routes')

const bdconnect=require('./bdconnect')

const app = express();

app.use(express.json())

app.use('/api',userrouter)

app.get('/', (req, res) => {
    res.send('Hello World');
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    bdconnect();
});
