import React, { Component } from 'react';

import Tile from "./Tile.jsx"
import ActionTile from "./ActionTile.jsx"
import User from "./User.jsx"
import Block from "./Block.jsx"
import room from "./../Rooms/room.js"

import Connection from './Connection.js'



export default class Board extends Component {
  constructor() {
    super();

    this.addUser = this.addUser.bind(this);
    this.removeUser = this.removeUser.bind(this);
    this.keyEvent = this.keyEvent.bind(this);
    
    const boardWidth = room.settings.width;
    const boardHeight = room.settings.height;

    const tilesTemp = [];
    for (let i = 0; i < boardHeight; i++) {
      tilesTemp[i] = [];
      for(let j = 0; j < boardWidth; j++) {
        let element = <Tile count={(i*boardWidth + j)} />;

        for(let k= 0; k < room.assets.length; k++) {

          const s = room.assets[k];

          if(s.position.x === j && s.position.y === i) {
            if(s.blocked) {
              element = <Block count={(i*boardWidth + j)} color={s.color} />
            } else {            
              element = <ActionTile count={(i*boardWidth + j)} color={s.color} />
            }
          }
        }
        tilesTemp[i].push(element)
      }
    }

    this.state = {
      tiles: tilesTemp,
      message: null,
      users: [],
      id: "tablet-" + this.makeId(10)
    };



  }

  addUser(user) {
    console.log("Adding user", user)
    const curUsers = this.state.users;
    curUsers.push(user);
    this.setState({
      users: curUsers
    });
  }

  removeUser(user) {
    // console.log("Adding user", user)
    // const curUsers = this.state.users;
    // let index = curUsers.indexOf(user);
    // if(index > -1) {
    //   curUsers.splice(index, 1);
    //   this.setState({
    //     users: curUsers
    //   })
    // }
  }

  makeId(length) {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  sendMessage(message) {
    console.log(message)
    this.setState({message: message});
    this.refs.connection.sendMessage(message);
  }

  keyEvent(key, user) {
    this.refs[user].move(key);
  }


  render() {
    const userMap = this.state.users.map((user, key) => {
      return <User key={key} ref={user} id={user} sendMessage={(message) => this.sendMessage(message) } />
    })
    return (
      <div> 
        <div className="board" style={{width: room.settings.width*50}}>
          { this.state.tiles }
        </div>
        {userMap}
        <Connection eventHandle={(key, user) => this.keyEvent(key, user) } id={this.state.id} addUser={this.addUser} removeUser={this.removeUser} ref="connection" />
      </div>
    );
  }
}

