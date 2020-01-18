import React from 'react';
import MovieListDetail from "./MovieListDetail";

function MovieList(props) {

	return (
		<ul className="list-group">
			{
				props.movies.map((movie, index) =>
					<MovieListDetail movie={movie} key={index} />
				)
			}
		</ul>
	);
}

export default MovieList;
