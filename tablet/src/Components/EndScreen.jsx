import React from 'react';

export default class Waiting extends React.Component {

  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <div className="popup">
        <h2>The game is over</h2>
          <a href="/" className="cta">Start new game</a>
      </div>
    );
  }
}
