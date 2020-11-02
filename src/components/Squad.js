import React from "react"
import AllStarSquad from "./AllStarSquad"

const Squad = (props) => {
    const playersArray = props.squad.map((players, index) => (
        <AllStarSquad
        key={`${players.id}:${index}`}
        players={players}
        sellPlayer={props.sellPlayer}
        editSquadName={props.editSquadName}
        index={index}
        />
    ))

    return (
        <div> Your Squad Name Here: 
            <input className="name-editor"></input>
        <ul 
        className="all-star-squad"> {playersArray}
        </ul>
        </div>
    )
}

export default Squad