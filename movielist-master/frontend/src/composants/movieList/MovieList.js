import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { fetchMovie } from '../../Api/movieApi'; // Ensure path is correct

const MovieList = ({ searchResults = [], loading, error }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (searchResults.length > 0) {
      setMovies(searchResults);
      console.log(searchResults);
    } else {
      const fetchAllMovies = async () => {
        try {
          const data = await fetchMovie();
        
          setMovies(Array.isArray(data) ? data : []);
        } catch (err) {
          console.error('Error fetching movies:', err.message);
        }
      };

      fetchAllMovies();
    }
  }, [searchResults]);

  const refreshMovies = async () => {
    try {
      const data = await fetchMovie();
      setMovies(Array.isArray(data.movies) ? data.movies : []);
    } catch (err) {
      console.error('Error fetching movies:', err.message);
    }
  };
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching movies: {error}</p>;
  }

  return (
    <div>
      <main id="main">
        { (
          movies.map(el => <MovieCard key={el._id} el={el}  refreshMovies={refreshMovies} />)
        )}
      </main>
    </div>
  );
};

export default MovieList;
