import React, { Component } from 'react';

import Socket from 'socket.io-client';

const SOCKET_STREAM_URL = 'http://localhost:5000';


export default class Connection extends Component {
  

  constructor(props) {
    super(props);


    this._socket = new Socket(SOCKET_STREAM_URL);
    console.log(`Connecting socket to '${SOCKET_STREAM_URL}'`);
    this._retryMSec = 50000;


    const _this = this;
   

    this._socket.on('connect', () => {
      console.log('Connected to the stream socket server.');
      this._socket.emit("startGame", props.id)
    });

    this._socket.on('userjoined', (data) => {
      console.log("Having a new user", data);
      this.props.addUser(data.joined.id)
      //props.eventHandle(data.message)
    });

    this._socket.on('gamecode', (data) => {
      console.log('> socket gamedata:', data);
      props.handleGameCode(data.payload)
    });


    this._socket.on('removed', (data) => {
      if(data.split("-")[0] === "controller") {
        //props.removeUser(data);
      }
      console.log('> socket removal:', data);
      //props.eventHandle(data.message)
    });

    this._socket.on('move', (data) => {
      console.log('> socket event:', data);
      props.eventHandle(data.message.key , data.message.id);
    });

    this._socket.on('disconnect', () => {
      //console.log('Disconnected from the log-event stream socket server');
      setTimeout(function(){ _this._socket = new Socket(SOCKET_STREAM_URL); }, this._retryMSec);

    });

    this._socket.on('connect_error', (err) => {
      console.error(`Error while connecting with the socket server at ${SOCKET_STREAM_URL}`, err);
      setTimeout(function(){ _this._socket = new Socket(SOCKET_STREAM_URL); }, this._retryMSec);
      //throw err;
    });

    this.sendMessage = this.sendMessage.bind(this);
  }


  sendMessage(msgData) {
    this._socket.emit("msgData", msgData);
  }

  startGame(gameID) {
    console.log("sending")
    this._socket.emit("startgame", {payload: gameID});
  }


  render() {

    return (
      <div className="connection">connected</div>
    )
  }

}

