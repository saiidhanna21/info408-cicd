const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.json({
        status: 200,
        message: "Testing My First Website using CiCd Pipeline"
    })
})


app.listen(8000, () => {
    console.log("Server Running on port 8000")
})