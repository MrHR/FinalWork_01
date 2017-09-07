
import React from 'react';
import Connection from './Connection.jsx';
import Message from './Message.jsx';
import Puzzle from './Puzzle.jsx';
import CodeEnter from './CodeEnter.jsx';


export default class Remote extends React.Component {

  constructor(props) {
    super(props);

    this.handleKey = this.handleKey.bind(this)
    this.handleClick = this.handleClick.bind(this);
    this.handleCode = this.handleCode.bind(this)
    this.startGame = this.startGame.bind(this)
    this.answerPuzzle = this.answerPuzzle.bind(this)
    this.gameDone = this.gameDone.bind(this);

    this.state = {
      id: "controller-" + this.makeId(10),
      showPuzzle: false,
      gameCode: null,
      gameStarted: false
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
    this.setState({hasMessage: false, showPuzzle: false });
    this.refs.connection.send("key", key);
  }

  //display a recieved message
  messageEvent(data) {
    if(this.state.id == data.data.id) {
      
      this.setState({
        hasMessage: true,
        message: data.data.message,
        actionId: data.data.actionId,
        hasButton: data.data.hasButton,
        puzzle: data.data.puzzle
      });

    } else {
      console.log('not my message');
    }
  }

  handleClick() {
    console.log("handling", this.state)
    //display puzzle
    if(this.state.puzzle !== null) {
      this.setState({showPuzzle: true})
    }
  }

  handleCode(code) {
    this.setState({gameCode: code})
    this.refs.connection.send("code", code);
  }

  startGame() {
    this.setState({
      gameStarted: true
    })
  }

  gameDone() {
    this.setState({gameStarted: false});
  }

  answerPuzzle(answer) {
    //handle answer
    this.refs.connection.send("answer", answer);
    this.setState({gameStarted: false});
  }

  render() {

    const BackgroundImage = require('./Images/texture_brusedmetal.png');

    return (
      <div>
        {
          this.state.gameStarted ?
            <div className="container" style={{backgroundImage: `url(${BackgroundImage})`}}>

              <div className="btnContainer">
                <div className="emptyTile"></div>
                <div className="tile" onClick={() => this.handleKey("up") }>
                  <img src={require('./Images/button_up.png')} style={{width: "100%", height: "100%"}} />
                </div>
                <div className="emptyTile"></div>
                <div className="tile" onClick={() => this.handleKey("left") }>
                  <img src={require('./Images/button_left.png')} style={{width: "100%", height: "100%"}} />
                </div>
                <div className="tile" onClick={() => this.handleKey("down") }>
                  <img src={require('./Images/button_down.png')} style={{width: "100%", height: "100%"}} />
                </div>
                <div className="tile" onClick={() => this.handleKey("right") }>
                  <img src={require('./Images/button_right.png')} style={{width: "100%", height: "100%"}} />
                </div>
              </div>

              { this.state.hasMessage ? <Message message={this.state.message} hasButton={this.state.hasButton} handleClick={this.handleClick} /> : null }

              { this.state.showPuzzle ? <Puzzle type={this.state.puzzle.type} solution={this.state.puzzle.solution} answerPuzzle={this.answerPuzzle} /> : null }

            </div>
          :
            <CodeEnter handleCode={this.handleCode} />

        }
        <Connection startGame={this.startGame} eventHandle={(data) => this.messageEvent(data)} ref="connection" gameDone={this.gameDone} id={this.state.id} />
      </div>
      
    );
  }
}
