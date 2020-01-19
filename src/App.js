import React, {useState} from 'react';
import MovieList from "./components/MovieList";
import * as api from './api/api';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import FileNotFound from "./components/FileNotFound";
import MovieDetail from "./components/MovieDetail";

function App() {
	// 0. state in the app
	const [keyword, setKeyword] = useState('');
	const [movies, setMovies] = useState([]);
	const [movieId, setMovieId] = useState('');
	const [currentMovie, setCurrentMovie] = useState({});
	// const history = useHistory();

	// 1. capture Enter key in search box
	const onEnter = (event) => {
		if (event.key === 'Enter') {
			searchMovies()
		}
	};

	// 2. Search for movies, based on keyword
	const searchMovies = async () => {
		if (keyword.length >= 3) {
			setMovies(await api.searchMovies(keyword));
			// setMovies(movies);
		}
	};

	// 3. Search for specific movie, based on ID
	const searchMovie = async (movie) => {
		// setCurrentMovie(movie);
		setMovieId(movie.imdbID);
		setCurrentMovie(await api.searchMovie(movie.imdbID));
		// history.push('/detail/' + movie.imdbID)
	};

	// 3. Reset/clear button
	const clear = () => {
		setKeyword('');
		setMovies([]);
	};

	//**********************
	// View
	//**********************
	return (
		<BrowserRouter>
			<div className="container">
				<Switch>
					<Route exact path="/">
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
								onClick={() => searchMovies()}>
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
						<MovieList movies={movies} searchMovie={(movie) => searchMovie(movie)}/>
					</Route>
					<Route path="/detail/:id">
						<MovieDetail movie={currentMovie}/>
					</Route>
					{/*404 - File not found*/}
					<Route component={FileNotFound}/>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
