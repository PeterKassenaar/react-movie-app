import React, {useState} from 'react';
import MovieList from "./components/MovieList";
import * as api from './api/api';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import FileNotFound from "./components/FileNotFound";
import MovieDetail from "./components/MovieDetail";

function App() {
	const [keyword, setKeyword] = useState('');
	const [movies, setMovies] = useState([]);

	const onEnter = (event) => {
		if (event.key === 'Enter') {
			searchMovies()
		}
	};

	const searchMovies = async () => {
		if (keyword.length >= 3) {
			const movies = await api.searchMovies(keyword);
			setMovies(movies);
		}
	};

	// Reset/clear button
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
						<MovieList movies={movies}/>
					</Route>
					<Route path="/detail/:id">
						<MovieDetail />
					</Route>
					{/*404 - File not found*/}
					<Route component={FileNotFound} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
