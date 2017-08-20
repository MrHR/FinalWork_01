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
<<<<<<< HEAD
			this.props.answerPuzzle(answer);
=======
			alert("well done")
>>>>>>> e97d30ee8e55d400ace03a6ff472b3d167d98b9d
		}
	}


	render() {
		return (
			<div className="puzzle">
<<<<<<< HEAD
				{ this.state.lock === "lock" ? <Lock answered={this.answered} /> : null }
=======
			{this.props.solution}
				{ this.state.lock === "lock" ? <Lock answered={this.answered} /> : null }
			}
>>>>>>> e97d30ee8e55d400ace03a6ff472b3d167d98b9d
			</div> 
		);
	}
}