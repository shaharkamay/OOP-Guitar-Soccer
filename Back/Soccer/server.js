const express = require('express');
const playerRouter = require('./routers/playerRouter');
const goalkeeperRouter = require('./routers/goalkeeperRouter');
const cors = require('cors');

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

app.use('/player', playerRouter);
app.use('/goalkeeper', goalkeeperRouter);

app.listen(port, () => {
    console.log('app started');
})