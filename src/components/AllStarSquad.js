import React, {Component} from "react"

class AllStarSquad extends Component{
    constructor(props){
        super(props)
    }

    render (){
        const {players} = this.props
        return (
        <li className="inside">
                <span className="sell-button"
                onClick={(e) => {
                    e.stopPropagation()
                    this.props.sellPlayer(this.props.index)
                }}
                >
                    {" * SELL * "}
                </span>
            <h1>
                {players.name}{" "}
                </h1>
                <h2>{players.position}</h2>    
            </li>   
        )
    }
}

export default AllStarSquad