
import React from 'react';

export default class ActionTile extends React.Component {

  render() {
    return (
      <div className="actionTile" style={{background: this.props.color}} >
        {this.props.count}
      </div>
    );
  }
}
