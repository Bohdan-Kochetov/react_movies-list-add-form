import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { NewMovie } from './components/NewMovie';
import moviesFromServer from './api/movies.json';

interface State {
  movies: Movie[];

}

export class App extends React.Component<{}, State> {
  state: State = {
    movies: moviesFromServer,
  };

  addMovie = (newMovie: Movie) => {
    this.setState((state) => ({ movies: [...state.movies, newMovie] }));
  };

  render() {
    const { movies } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <MoviesList movies={movies} />
        </div>
        <div className="sidebar">
          <h1 className="title">Add movie</h1>
          <NewMovie addMovie={this.addMovie} />
        </div>
      </div>
    );
  }
}