import React, { useState, useEffect } from 'react';
import './App.css';
const MovieForm = ({ handleAdd, handleUpdate, currentMovie, setCurrentMovie }) => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (currentMovie) {
            setName(currentMovie.name || '');
            setImage(currentMovie.image || '');
            setDescription(currentMovie.description || '');
        } else {
            setName('');
            setImage('');
            setDescription('');
        }
    }, [currentMovie]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentMovie) {
            handleUpdate(currentMovie.id, { name, image, description });
            setCurrentMovie(null);
        } else {
            handleAdd({ id: Date.now(), name, image, description });
        }

        setName('');
        setImage('');
        setDescription('');
    };

    return (
        <form className="movie-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Movie Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Movie Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />
            <textarea
                placeholder="Movie Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <button type="submit">{currentMovie ? 'Update' : 'Add'}</button>
        </form>
    );
};

export default MovieForm;
