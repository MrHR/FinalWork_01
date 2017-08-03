
import React from 'react';

import Connection from './Connection.jsx'

export default class Remote extends React.Component {

  constructor(props) {
    super(props);

    this.handleKey = this.handleKey.bind(this)

    this.state = {
      id: "controller-" + this.makeId(10)
    }
  }

  makeId(length) {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }


  handleKey(key) {
    this.refs.connection.send(key);
  }

  render() {
    return (
      <div className="spaced">
        <div className="tile" onClick={() => this.handleKey("up") }>
          up
        </div>
        <div className="tile" onClick={() => this.handleKey("down") }>
          down
        </div>
        <div className="tile" onClick={() => this.handleKey("left") }>
          left
        </div>
        <div className="tile" onClick={() => this.handleKey("right") }>
          right
        </div>

        <div className="spaced message">
          { this.props.message }
        </div>
        <Connection ref="connection" id={this.state.id} />
      </div>
    );
  }
}
