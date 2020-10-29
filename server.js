const express = require('express');
// Constants
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || 'localhost';
// App
const app = express();
app.get('/fargate-service', (req, res) => {
return res.send(`Hello World from fargate-service`);
});
app.listen(PORT);
console.log(`Running on port :${PORT}`);