import React, { Component } from "react"
import Players from "./Players"
import axios from "axios"

class ScoutPlayers extends Component {
    constructor(){
        super()

        this.state = {
            searchInput: "",
            displayPlayers: [],
        }
    }

    componentDidMount(){
        axios.get("/api/players")
        .then((res) => {
            this.setState ({
                displayPlayers: res.data
            })
        })
    }

    handleInput = (e) => {
        this.setState({searchInput: e.target.value})
        axios.get(`api/players?search=${e.target.value}`).then((res) => {
            this.setState({displayPlayers: res.data})
        })
        .catch((err)=> console.log(err))
    }

    render(){
        let mappedPlayers = []
        mappedPlayers = this.state.displayPlayers.map((players) => (
            <Players key={players.id}
            players={players}
            addToSquad={this.props.addToSquad}
            />
        ))
        return (
        <div className="player-list">
            <input value={this.state.searchInput} onChange={this.handleInput}/>
            <button className="search-button" onClick={this.searchPlayers}> Find A Player </button>
            <ul className="players">{mappedPlayers}</ul>
        </div>
       )     
    }
}

export default ScoutPlayers