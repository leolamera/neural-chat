const express = require('express')

const app = express()

app.get("/", async (req, res) => {
    res.json({
        mensagem: "teste alou som"
    })
})

console.log(process.env.LOCATION_DEPLOY)

app.listen(5000, () => console.log("🪐 server is listen on port 5000 🔥"))