const express = require("express")
app = express()
ctrl = require("./controller.js")
port = 4444

app.use(express.json())

app.get("/api/players", ctrl.getPlayers)
app.get("/api/players/:id", ctrl.getOnePlayer)
app.get("/api/squad", ctrl.getSquad)
app.post("/api/squad/:id", ctrl.addToSquad)
app.put("/api/squad/:index", ctrl.editSquadName)
app.delete("/api/squad/:index", ctrl.sellPlayer)


app.listen(port, () => console.log(`server listening on port ${port}`))