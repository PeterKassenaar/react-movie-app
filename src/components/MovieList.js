import React, {useState} from 'react';
import {Redirect} from "react-router";
// import MovieListDetail from "./MovieListDetail";

function MovieList(props) {
	const [toDetail, setToDetail] = useState(false);
	const [id, setId] = useState(-1);

	const getDetails = (movie) => {
		console.log('Get details for: ', movie);
		props.searchMovie(movie)
		setId(movie.imdbID);
		setToDetail(true);
	};

	if (toDetail) {
		return <Redirect to={`/detail/${id}`}/>
	} else {
		return (
			<ul className="list-group">
				{
					props.movies.map((movie, index) =>
						// <MovieListDetail movie={movie} key={index} />
						<li className="list-group-item" key={index} onClick={() => getDetails(movie)}>
							{/*Only render image if there is a poster (annotated by 'N/A' by the API)*/}
							{
								movie.Poster !== 'N/A' ?
									<img src={movie.Poster}
										 className="moviePoster"
										 alt={'Poster for ' + movie.Poster}
										 title={'Poster for ' + movie.Title}/>
									:
									''
							}
							{movie.Title} ({movie.Year})
						</li>
					)
				}
			</ul>
		);
	}
}

export default MovieList;
