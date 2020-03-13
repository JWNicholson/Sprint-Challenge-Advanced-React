import React from 'react';
import axios from 'axios';
import Players from './components/Players';
import NavBar from './components/Navbar';
import './App.css';

class App extends React.Component {
  //players use state array
  state = {
    players: []
  };

  componentDidMount() {
    axios.get("http://localhost:5000/api/players")
      .then(res => {
        console.log("Player data ", res.data);
        this.setState({players: res.data});
      }, [])
      .catch(err => {
        console.log("No data returned", err )
      })
  }//end state

render() {
  return (
    <div className="App">
      <NavBar />
      
      <h2>In order of search popularity:</h2>
      <Players players={this.state.players} />
    </div>
  )
}

}//end App

export default App;
