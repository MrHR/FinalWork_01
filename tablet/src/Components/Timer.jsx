


import React from 'react';

export default class Timer extends React.Component {

  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this)
    this.ranOut = this.ranOut.bind(this);
    this.state = {
      ellapsed: 0,
      start: Date.now(),
      limit: 600
    }
  }
  componentDidMount() {
    this.timer = setInterval(this.tick, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  tick() {
    const left = (this.state.limit - Math.round((new Date() - this.state.start) / 1000));
     this.setState({elapsed: left});
    if(left < 0) {
      this.ranOut();
    }
  }

  ranOut() {
    this.props.ranOut();
  }
  render() {
    return (
      <div className="timerpopup">
        {this.state.elapsed}
      </div>
    );
  }
}
