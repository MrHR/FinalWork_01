import React from 'react';

export default class Lock extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="lock">
				<div class="wheel numbers-10">
					<button class="btnDirection btnTop"></button>
					<button class="btnDirection btnDown"></button>
				</div>
				<div class="wheel numbers-10">
					<button class="btnDirection btnTop"></button>
					<button class="btnDirection btnDown"></button>
				</div>
				<div class="wheel numbers-10">
					<button class="btnDirection btnTop"></button>
					<button class="btnDirection btnDown"></button>
				</div>
			</div> 
		);
	}
}