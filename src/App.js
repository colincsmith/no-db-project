import './App.css';
import React, {Component} from "react"
import axios from "axios"
import Header from "./components/Header"
import Squad from "./components/Squad"
import ScoutPlayers from "./components/ScoutPlayers"
import AllStarSquad from './components/AllStarSquad';

class App extends Component{
  constructor(){
    super()

    this.state = {
      squad: []
    }
    this.addToSquad = this.addToSquad.bind(this)
  }

  componentDidMount(){
    axios
    .get("/api/squad").then((res) => {
      this.setState({squad: res.data})
      if(res.data.length < 5){
        res.status(200).send(res.data)
      }
    })
    .catch((err) => console.log(err))
  }

  addToSquad(id){
    axios
    .post(`/api/squad/${id}`).then((res) => {
      this.setState({squad: res.data})
    })
    .catch((err) => console.log(err))
    }

  sellPlayer = (index) => {
    axios
    .delete(`/api/squad/${index}`).then((res) => {
      this.setState({squad: res.data})
    })
    .catch((err) => console.log(err))
  }

  editSquadName = (index, squadName) => {
    axios
    .put(`/api/squad/${index}`, {squadName}).then((res) => {
      this.setState({squad: res.data})
    })
    .catch((err) => console.log(err))
  }


  render(){
  return (
    <div>
      <Header />
      <main className="main-container">
        <ScoutPlayers addToSquad={this.addToSquad}/>
        <Squad
        squad={this.state.squad}
        sellPlayer={this.sellPlayer}
        editSquadName={this.editSquadName}
        />
      </main>
    </div>
  );
  }
}

export default App;
