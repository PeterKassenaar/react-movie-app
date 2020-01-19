import React, {useState} from 'react';
import {Redirect} from "react-router";

// styles for the moviePoster
const moviePoster = {
	maxWidth: '80px',
};

function MovieListDetail(props) {
	const [toDetail, setToDetail] = useState(false);
		const [id, setId] = useState(-1);
	const movie = props.movie;

	const getDetails = (movie) => {
		console.log('Get details for: ', movie);
		setId(movie.imdbID);
		setToDetail(true);
	};

	if (toDetail) {
		return <Redirect to={`/detail/${id}`}/>
	} else {
		return (
			<div>
				<li className="list-group-item" onClick={() => getDetails(movie)}>
					{/*Only render image if there is a poster (annotated by 'N/A' by the API)*/}
					{
						movie.Poster !== 'N/A' ?
							<img src={movie.Poster}
								 style={moviePoster}
								 alt={'Poster for ' + movie.Poster}
								 title={'Poster for ' + movie.Title}/>
							:
							''
					}
					{movie.Title} ({movie.Year})
				</li>
			</div>
		);
	}
}

export default MovieListDetail;
