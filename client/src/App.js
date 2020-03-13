import React from 'react';
import axios from 'axios';
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
      }, []);
  }//end state

render() {
  return (
    <div className="App">
      <h1>Womens World Cup Players</h1>
      <h4>In order of search popularity:</h4>
      {/* <Players players={this.state.players} /> */}
    </div>
  )
}

}//end App

export default App;
