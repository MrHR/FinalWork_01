'use strict';

import React from 'react';
import ReactDOM from 'react-dom';


import Remote from "./Components/Remote.jsx"

import './index.css';



class Game extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
          <Remote />
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
