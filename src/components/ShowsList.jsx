import React, { useEffect, useState } from 'react';
import { getPopularShows, searchShows } from '../services/api';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import ShowCard from './ShowCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const ShowsList = () => {
  const [shows, setShows] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchShows();
  }, [page]);

  const fetchShows = async () => {
    const showsData = await getPopularShows(page);
    setShows(showsData);
    setTotalPages(showsData.length);
  };

  const handleSearch = async (searchTerm) => {
    const searchResults = await searchShows(searchTerm);
    if (searchResults) {
      setShows(searchResults);
      setTotalPages(1);
      setPage(1);
    } else {
      setShows([]);
      setTotalPages(0);
      setPage(1);
    }
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const getPageNumbers = () => {
    const totalPagesToShow = 5;
    const maxPages = Math.min(totalPages, totalPagesToShow);
    const halfTotalPagesToShow = Math.floor(totalPagesToShow / 2);
    let startPage = Math.max(page - halfTotalPagesToShow, 1);
    const endPage = Math.min(startPage + maxPages - 1, totalPages);

    if (endPage - startPage + 1 < maxPages) {
      startPage = Math.max(endPage - maxPages + 1, 1);
    }

    return Array.from({ length: maxPages }, (_, index) => startPage + index);
  };

  return (
    <div className="container mt-4">
      <SearchBar onSearch={handleSearch} />
      <div className="row mt-4">
        {shows.length > 0 ? (
          shows.map((show) => <ShowCard key={show.id} show={show} />)
        ) : (
          <p>No se encontraron resultados.</p>
        )}
      </div>
      <div className="d-flex justify-content-center mt-4">
        <nav aria-label="Page navigation">
          <ul className="pagination">
            <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
              <button
                className="page-link"
                onClick={handlePrevPage}
                disabled={page === 1}
              >
                Prev
              </button>
            </li>
            {getPageNumbers().map((pageNumber) => (
              <li
                key={pageNumber}
                className={`page-item ${
                  page === pageNumber ? 'active' : ''
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => setPage(pageNumber)}
                >
                  {pageNumber}
                </button>
              </li>
            ))}
            <li className={`page-item ${page === totalPages ? 'disabled' : ''}`}>
              <button
                className="page-link"
                onClick={handleNextPage}
                disabled={page === totalPages}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ShowsList;

