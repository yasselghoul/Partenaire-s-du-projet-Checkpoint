import React, { useState, useEffect } from 'react';
import './App.css';
import MovieAdd from './composants/movieAdd/MovieAdd';
import MovieList from './composants/movieList/MovieList';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './HomePage';
import Navbar from './composants/nav/NavBar';
import Signup from './composants/auth/Signup';
import Login from './composants/auth/Login';
import Update from './composants/updateMovie/Update';

import axios from 'axios';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Vérifier l'état d'authentification lors du chargement du composant
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSearch = async (searchTerm) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:4000/movie/search?titre=${searchTerm}`);
      setSearchResults(Array.isArray(response.data) ? response.data : []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    // Supprimer le token du localStorage
    localStorage.removeItem('token');
    // Réinitialiser l'état d'authentification
    setIsAuthenticated(false);
    // Rediriger vers la page de connexion
    navigate('/login');
  };

  return (
    <div>
      {isAuthenticated && <Navbar onSearch={handleSearch} onLogout={handleLogout} />}
      <Routes>
        {/* Routes publiques */}
        <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} navigate={navigate} />} />
        <Route path="/signup" element={<Signup navigate={navigate} />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} navigate={navigate} />} />

        {/* Routes protégées */}
        {isAuthenticated && (
          <>
            <Route path="/home" element={<HomePage searchResults={searchResults} loading={loading} error={error} />} />
            <Route path="/list" element={<MovieList searchResults={searchResults} loading={loading} error={error} />} />
            <Route path="/add" element={<MovieAdd />} />
            <Route path="/updateMovie/:id" element={<Update/>}/>
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
