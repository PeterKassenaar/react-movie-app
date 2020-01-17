import React from 'react';

// styles for the moviePoster
const moviePoster = {
	maxWidth: '80px',
};

function MovieDetail(props) {
	const movie = props.movie;
	return (
		<div>
			<li className="list-group-item">
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

export default MovieDetail;
