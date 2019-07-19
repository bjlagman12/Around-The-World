const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.listen(port , () => console.log(`LISTENING TO ANDRE PORT ${port}`))