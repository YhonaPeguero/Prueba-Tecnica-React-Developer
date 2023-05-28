// SearchBar.jsx

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm); // Llamar a la función onSearch pasando el término de búsqueda
  };

  return (
    <div className="mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar series de TV..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Buscar
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
