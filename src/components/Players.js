import React from "react"

const Players = (props) => {
    return (
        <li className = "player"
        
        onClick={() => {
            props.addToSquad(props.players.id)
        }}
        >
            
            <h1> {props.players.name} </h1>
            <img className="player-pic" src={props.players.image}></img>
            <h2> {props.players.position} </h2>
            <h3> {props.players.team} </h3>
        </li>
    )
}

export default Players