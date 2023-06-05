import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie, editMovie, deleteMovie } from './actions';
import Navigation from './Navigation';
import MovieList from './MovieList';
import MovieForm from './MovieForm';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentMovie, setCurrentMovie] = useState(null);
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAdd = (movie) => {
    dispatch(addMovie(movie));
  };

  const handleEdit = (movie) => {
    setCurrentMovie(movie);
  };

  const handleUpdate = (id, updatedMovie) => {
    dispatch(editMovie(id, updatedMovie));
  };

  const handleDelete = (id) => {
    dispatch(deleteMovie(id));
  };

  return (
    <div>
      <Navigation handleSearch={handleSearch} />
      <MovieForm
        handleAdd={handleAdd}
        handleUpdate={handleUpdate}
        currentMovie={currentMovie}
        setCurrentMovie={setCurrentMovie}
      />
      <MovieList
        movies={filteredMovies}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
