'use strict';

import React, { Component } from 'react';

import Socket from 'socket.io-client';

const SOCKET_STREAM_URL = 'http://localhost:5000';

let gameCode = null;


export default class Connection extends Component {
  

  constructor(props) {
    super(props);

    
    this._socket = new Socket(SOCKET_STREAM_URL);
    console.log(`Connecting socket to '${SOCKET_STREAM_URL}'`);
    this._retryMSec = 50000;

    const _this = this;
   

    this._socket.on('connect', () => {
      console.log('Connected to the stream socket server.');
      this._socket.emit("identify", props.id);
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

    this._socket.on('message', (data) => {
      console.log("data message", data);
      props.eventHandle(data);
    });

    this._socket.on("startgame", (data) => {
      if(gameCode === data.id) {
        this.props.startGame();
      }
    })

    this.send = this.send.bind(this);
  }

  send(type, key = "", actionId = 0) {
    console.log(type)

    switch(type) {
      case "key":
        this._socket.emit("key", {key: key, id: this.props.id});
        break;
      case "action":
        this._socket.emit("actionCall", {actionId: actionId, id:this.props.id});
        break;
      case "code":
        this._socket.emit("addUser", {payload: key, id:this.props.id});
        gameCode = key
        break;        
      default:
        console.log('nothing to send');
        break;
    }
    
  }

  render() {

    return (
      <div className="connection">connected</div>
    )
  }

}

