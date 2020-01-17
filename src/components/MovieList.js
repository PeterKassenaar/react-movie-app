import React from 'react';
import MovieDetail from "./MovieDetail";

function MovieList (props) {
  return (
	  <ul className="list-group">
		  {
			  props.movies.map((movie, index) =>
				  <MovieDetail movie={movie} key={index} />
			  )
		  }
	  </ul>
  );
}

export default MovieList;
