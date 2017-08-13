
import React from 'react';

import Connection from './Connection.jsx';
import Message from './Message.jsx';

export default class Remote extends React.Component {

  constructor(props) {
    super(props);

    this.handleKey = this.handleKey.bind(this)
    this.removeMessage = this.removeMessage.bind(this);

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
    //send the key to the server
    this.setState({hasMessage: false});
    this.refs.connection.send("key", key);
  }

  //display a recieved message
  messageEvent(data) {
    if(this.state.id == data.data.id) {
      
      this.setState({
        hasMessage: true,
        message: data.data.message,
        actionId: data.data.actionId,
        hasButton: data.data.hasButton
      });

    } else {
      console.log('not my message');
    }
  }

  removeMessage(actionId) {
    this.setState({hasMessage: false});
    if(actionId !== null) {
      this.refs.connection.send("action", actionId);  
    }
    
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

        { this.state.hasMessage ? <Message message={this.state.message} hasButton={this.state.hasButton} handleClick={(actionId) => this.removeMessage(this.state.actionId)} /> : null }

        <Connection eventHandle={(data) => this.messageEvent(data)} ref="connection" id={this.state.id} />
      </div>
    );
  }
}
