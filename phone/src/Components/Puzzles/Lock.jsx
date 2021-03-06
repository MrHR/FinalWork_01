import React from 'react';

export default class Lock extends React.Component {
	constructor(props) {
		super(props);
		this.addNum = this.addNum.bind(this);
		this.clearPad = this.clearPad.bind(this);
		this.state = {
			curNum: ""
		}
	}

	returnMessage(message) {

		this.props.answered("")
	}

	addNum(num) {
		console.log();
		if(this.state.curNum !== "") {
			this.setState({curNum: this.state.curNum + '.' + num.i })
		} else {
			this.setState({curNum: num.i })
		}
	}

	clearPad() {
		this.setState({curNum: ""})
	}

	render() {
		const keypad = [];
		for(let i = 0; i<10; i++) {
			keypad.push(<a key={i} className="keyTile" onClick={() => this.addNum({i})}>{i}</a>);
		}
		return (
			<div className="keypad">
				{ this.state.curNum } 
				<div className="keyHolders">
					{keypad}
				</div>
				<div className="keyHolders">
					<a onClick={() => this.props.answered(this.state.curNum)} className="tile">ENTER</a>
					<a onClick={this.clearPad} className="tile">CLEAR</a>
				</div>
			</div>
		);
	}
}