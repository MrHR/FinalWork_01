import React from 'react';
import Lock from './Puzzles/Lock.jsx';

export default class Puzzle extends React.Component {
	constructor(props) {
		super(props);

		this.answered = this.answered.bind(this);

		this.state = {
			lock: "lock"
		}
	}

	answered(answer) {
		console.log(answer)
		if(answer == this.props.solution) {
			this.props.answerPuzzle(answer);
		}
	}


	render() {
		return (
			<div className="puzzle">
				{ this.state.lock === "lock" ? <Lock answered={this.answered} /> : null }
			</div> 
		);
	}
}