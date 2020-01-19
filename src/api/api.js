// api.js - simple api for communicating from the app with a backend (=Omdb API)
import axios from 'axios'

const url = 'https://www.omdbapi.com/?apikey=f1f56c8e&';

// Get a list of 10 top movies
export const searchMovies = (keyword) => {
	return axios.get(`${url}s=${keyword}`)
		.then(result => result.data.Search) // Only return the 'Search' array from the result
};

// Get a single movie by ID
export const searchMovie = (id) => {
	console.log({id});
	return axios.get(`${url}i=${id}`)
		.then(result => {
			console.log(result.data);
			return result.data;
		})
};
