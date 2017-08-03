
import React from 'react';
import keydown, { Keys } from 'react-keydown';
import room from './../Rooms/room.js'

export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.move = this.move.bind(this)
    
    this.state = {
      pos: {
        xPos: 0,
        yPos: 0
      }
    }
  }


  move(key) {

    let newPosX = this.state.pos.xPos;
    let newPosY = this.state.pos.yPos;
    
    let curPos = this.state.pos;
    
    switch( key ) {
      case "left":
        //left logic
        newPosX = newPosX-1;
        break;
      case "right":
        //right logic
        newPosX = newPosX+1;
        break;
      case "up":
        //up logic
        newPosY = newPosY-1;
        break;
      case "down":
        //down logic
        newPosY = newPosY+1;
        break;

    } 

    if(newPosY < 0 || newPosX < 0 || newPosY > room.settings.height-1 || newPosX > room.settings.width-1) {
      newPosY = curPos.yPos;
      newPosX = curPos.xPos;
    }


    for(let i = 0; i < room.assets.length; i++ ){
      const s = room.assets[i];
      if( newPosY === s.position.y && newPosX === s.position.x ) {

        if(s.blocked) {
          newPosY = curPos.yPos;
          newPosX = curPos.xPos;
        } 
        if(s.displayMessage) {
          console.log("sending")
          this.props.sendMessage(s.messages[0]);
        }

      }
    }




    this.setState({ pos: { xPos: newPosX, yPos: newPosY } } )


  }
  
  render() {
    return (
      <div className="user" style={{
          left: this.state.pos.xPos*50,
          top: this.state.pos.yPos*50
        }}>
        user
      </div>
    );
  }
}
