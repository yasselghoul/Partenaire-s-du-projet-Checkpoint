import React from 'react';
import { removeMovie } from '../../Api/movieApi';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ el, refreshMovies }) => {
  const navigate = useNavigate();

  const removeM = async () => {
    try {
      await removeMovie(el._id);
      refreshMovies(); // Refresh the movie list after removing
    } catch (err) {
      console.error('Error removing movie:', err.message);
    }
  };

  return (
    <div>
      <img src={el.image} alt={el.titre} />
      <div className="movie-info">
        <h3>{el.titre}</h3>
        <span>{el.rate}</span> <br /><br /><br /><br />
       
        <button onClick={removeM}>Remove</button>
        <button onClick={() => navigate(`/updateMovie/${el._id}`)}>Update</button>
      </div>
    </div>
  );
};

export default MovieCard;
