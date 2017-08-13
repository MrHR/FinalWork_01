import React from 'react';
import room from './../Rooms/room.js';
import Lock from '/Puzzles/Lock.js';

export default class Puzzle extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="puzzle">
				{
					switch(lock) {
						case "lock": 
							<Lock params={params} />
					}
				}
			</div> 
		);
	}
}