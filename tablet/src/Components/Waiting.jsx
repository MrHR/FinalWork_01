import React from 'react';

export default class Waiting extends React.Component {

  constructor(props) {
    super(props);
    
  }
  render() {
    console.log(this.props);
    const userList = this.props.users.map((user, key) =>  {
      return <li key={key}>{user}</li>
    })
    return (
      <div className="popup">
        {
          this.props.code ? this.props.code.id : "Waiting for a code"
        }

        <ul>
          {userList}
        </ul>

        { this.props.users.length > 0 ? 
          <a onClick={this.props.startGame} className="cta">Start game</a> : null
        }
      </div>
    );
  }
}
