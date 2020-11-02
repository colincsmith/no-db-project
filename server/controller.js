const playerlist = require("./players.json")

let squad = []

module.exports = {
    getPlayers: (req, res) => {
        const {search} = req.query
        const resArray = []

        if(search){
            const filteredPlayers = playerlist.filter((players) => 
            players.name.toLowerCase().includes(search.toLowerCase())
            )
            for(let i = 0; i < 25; i++){
                if (filteredPlayers[i]) {
                resArray.push(filteredPlayers[i])
                }
            }
        }else {
            for(let i = 0; i < 25; i++){
                resArray.push(playerlist[i])
            }
        }
        return res.status(200).send(resArray)
    },
    getOnePlayer: (req, res) => {
        const {id} = req.params
        const foundPlayer = playerlist.find(players => players.id === +id)

        if(!foundPlayer){
            res.status(400).send("Player not found")
        }

        res.status(200).send(foundPlayer)
    },
    getSquad: (req, res) => {
        res.status(200).send(squad)
    },
    addToSquad: (req, res) => {
        if(squad.length < 5){
        const {id} = req.params
        const foundPlayer = {...playerlist.find((players) => 
        players.id === +id)}

        foundPlayer.squadName = ""

        squad.push(foundPlayer)

        res.status(200).send(squad)
        }
    },
    editSquadName: (req, res) => {
        const {index} = req.params
        const {squadName} = req.body

        squad[index].squadName = squadName
        res.status(200).send(squad)
    },
    sellPlayer: (req, res) => {
        const {index} = req.params

        squad.splice(index, 1)

        res.status(200).send(squad)
    }
}