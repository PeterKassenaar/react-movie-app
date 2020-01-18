// MovieDetail.js - component showing details for a given movie

import React, {useState} from 'react';
import {Redirect} from "react-router";

function MovieDetail(props) {
	const [toHome, setToHome] = useState(false);

	const goHome = () => {
		setToHome(true)
	};

	if (toHome) {
		return <Redirect to="/"/>
	} else {
		return (
			<div>
				<h2>Details for {props.movie}</h2>
				<button className="btn btn-success" onClick={() => goHome()}>Home</button>
			</div>
		);
	}
}

export default MovieDetail;
