const express = require('express')
const PORT = process.env.PORT || 4001;
const server = express()

server.use(express.json());

server.get('/', (req, res, next) => {
    res.send(`<h1>Your friendly recipe guide </h1>`)
})

server.listen(PORT, () => console.log(`server is listening at ${PORT}`))