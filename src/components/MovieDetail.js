// MovieDetail.js - component showing details for a given movie

import React, {useState} from 'react';
import {Redirect} from "react-router";

const moviePoster = {
	maxWidth: '80px',
	float: 'left',
	padding: '10px',
};

// Properties:
// Title: "Johnny Test"
// Year: "2005–2014"
// Rated: "TV-Y7"
// Released: "01 Jan 2005"
// Runtime: "30 min"
// Genre: "Animation, Action, Adventure, Comedy, Drama, Family, Sci-Fi"
// Director: "N/A"
// Writer: "Scott Fellows, Chris Savino"
// Actors: "James Arnold Taylor, Maryke Hendrikse, Lee Tockar, Ashleigh Ball"
// Plot: "The adventures of average suburban boy Johnny Test, who wittingly plays test subject for his genius twin sisters' various experiments, reluctantly fighting evil villains in the process."
// Language: "English"
// Country: "USA, Canada"
// Awards: "1 win & 5 nominations."
// Poster: "https://m.media-amazon.com/images/M/MV5BYzc3OGZjYWQtZGFkMy00YTNlLWE5NDYtMTRkNTNjODc2MjllXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg"
// Ratings: [{…}]
// Metascore: "N/A"
// imdbRating: "4.9"
// imdbVotes: "5,976"
// imdbID: "tt0454349"
// Type: "series"
// totalSeasons: "6"
// Response: "True"

function MovieDetail(props) {
	const [toHome, setToHome] = useState(false);
	const movie = props.movie;
	console.log({movie});

	const goHome = () => {
		setToHome(true)
	};

	if (toHome) {
		return <Redirect to="/"/>
	} else {
		return (
			<div>
				<div className="jumbotron">

					<h2> {movie.Title}</h2>
					<img style={moviePoster} src={movie.Poster}
						 alt=""/>
					<p>
						{movie.Plot}
					</p>
				</div>
				<button className="btn btn-success"
						onClick={() => goHome()}>Home
				</button>
			</div>
		);
	}
}

export default MovieDetail;
