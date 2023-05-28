// ShowCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function ShowCard({ show }) {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100 shadow">
        <img src={show.image_thumbnail_path} className="card-img-top" alt={show.name} style={{ objectFit: 'cover', height: '200px' }} />
        <div className="card-body">
          <h5 className="card-title">{show.name}</h5>
        </div>
        <div className="card-footer">
          <Link to={`/show/${show.id}`} className="btn btn-primary">Ver detalles</Link>
        </div>
      </div>
    </div>
  );
}

export default ShowCard;
