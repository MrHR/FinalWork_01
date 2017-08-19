import React from 'react';

export default class Message extends React.Component {

  constructor(props) {
    super(props);
    this.submitCode = this.submitCode.bind(this)
  }
  submitCode() {
    const code = this.refs.inputField.value;
    this.props.handleCode(code);
  }
  render() {
    return (
      <div className="codeInsert">
        <h3>Enter passcode</h3>
        <input type="text" maxLength="5" ref="inputField" />
        <a onClick={this.submitCode}>Submit</a>
      </div>
    );
  }
}