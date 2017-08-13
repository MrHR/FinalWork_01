import React from 'react';

export default class Message extends React.Component {

  render() {
    return (
      <div className="message">
        {this.props.message}
        { this.props.hasButton ? <button onClick={() => this.props.handleClick()}>Yes</button> : null}
      </div>
    );
  }
}