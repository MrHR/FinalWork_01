'use strict';

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
    //replace keypress with socket connection
   

    this._socket.on('connect', () => {
      console.log('Connected to the stream socket server.');
      this._socket.emit("identify", props.id)
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

    this.send = this.send.bind(this);
  }

  send(key) {
    console.log(key)

    this._socket.emit("key", {key: key, id: this.props.id});
  }

  render() {

    return (
      <div className="connection">connected</div>
    )
  }

}

