import React from 'react';
import ReactDOM from 'react-dom';


import Board from "./Components/Board.jsx"

import './index.css';



class Game extends React.Component {
  constructor(props) {
    super(props);
    this.connected = this.connected.bind(this)
    this.state = {
      gameID: null
    }
  }

  connected( id ) {
    this.setState({ gameID: id })
  }
  render() {
    return (
      <div className="BoardContainer">
        <Board />
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
