import React from 'react';
import ReactDOM from 'react-dom';


import Board from "./Components/Board.jsx"

import './index.css';



class Game extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
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
