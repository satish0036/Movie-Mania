import React from 'react';
import './App.css';
const Navigation = ({ handleSearch }) => {
    const handleInputChange = (e) => {
        handleSearch(e.target.value);
    };

    return (
        <nav className="nav1">
            <div className="left">
                <h1>Movie Mania</h1>
            </div>
            <div className="right">
                <input type="text" placeholder="Search movie by name" onChange={handleInputChange} />
            </div>
        </nav>
    );
};

export default Navigation;
