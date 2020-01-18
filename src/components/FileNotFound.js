// FileNotFound - a 404 component
import React from 'react';

function FileNotFound(props) {
	return (
		<div>
			<h1>404</h1>
			<h2>Sorry - file not found</h2>
			<button className="btn btn-success" onClick={() => {
				props.history.push('/')
			}}>Home
			</button>
		</div>
	);
}

export default FileNotFound;
