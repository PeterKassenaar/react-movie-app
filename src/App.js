import React, {useState} from 'react';
import axios from 'axios'
import MovieList from "./components/MovieList";

function App() {
	const url = 'https://www.omdbapi.com/?apikey=f1f56c8e&';
	const [keyword, setKeyword] = useState('');
	const [movies, setMovies] = useState([]);

	const onEnter = (event) => {
		if (event.key === 'Enter') {
			searchMovies()
		}
	};

	const searchMovies = () => {
		if (keyword.length >= 3) {
			axios.get(`${url}s=${keyword}`)
				.then(res => {
					const movies = res.data.Search;
					setMovies(movies);
				})
		}
	};

	// Reset/clear button
	const clear = () => {
		setKeyword('');
		setMovies([]);
	};

	// View
	return (
		<div className="container">
			<h1>React movie app</h1>
			<p>
				Type a movie name to search for. Your movie title should have at
				least three (3) characters.
			</p>
			<input className="form-control-lg"
				   placeholder="movie name"
				   value={keyword}
				   onKeyDown={(event => onEnter(event))}
				   onChange={(event => setKeyword(event.target.value))}
			/>
			<button className="btn btn-success"
					onClick={searchMovies}>
				Search
			</button>
			{/*Only render Clear button if there are any movies*/}
			{
				movies.length ?
					<button className="btn btn-info"
							onClick={clear}>
						Clear
					</button>
					:
					''
			}
			{/*Pass the found movies to the MovieList component*/}
			<MovieList movies={movies}/>
		</div>
	);
}

export default App;
