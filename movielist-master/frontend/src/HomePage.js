import React from 'react';
import './HomePage.css';
import MovieList from './composants/movieList/MovieList';

const HomePage = ({ searchResults, loading, error }) => {
  return (
    <div className="container">
      <MovieList searchResults={searchResults} loading={loading} error={error} />
    </div>
  );
};

export default HomePage;
