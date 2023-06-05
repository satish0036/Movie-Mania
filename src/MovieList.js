import React from 'react';
import './App.css';
const MovieList = ({ movies, handleEdit, handleDelete }) => {
    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <div key={movie.id} className="movie-item">
                    <img src={movie.image} alt={movie.name} className="movie-image" />
                    <h3 className="movie-name">{movie.name}</h3>
                    <p className="movie-desc">{movie.description}</p>
                    <div className="movie-buttons">
                        <button onClick={() => handleEdit(movie)} className="edit-button">
                            Edit
                        </button>
                        <button onClick={() => handleDelete(movie.id)} className="delete-button">
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MovieList;
