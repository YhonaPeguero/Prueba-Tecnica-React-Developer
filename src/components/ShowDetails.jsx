import React, { useEffect, useState } from 'react';
import { getShowDetails } from '../services/api';
import { useParams } from 'react-router-dom';

const ShowDetail = () => {
  const [show, setShow] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchShowDetails(id);
  }, [id]);

  const fetchShowDetails = async (id) => {
    const show = await getShowDetails(id);
    setShow(show);
  };

  if (!show) return null;

  return (
    <div className="show-detail">
      <h2>{show.name}</h2>
      <img src={show.image_thumbnail_path} alt={show.name} />
      <p>{show.description}</p>
    </div>
  );
};

export default ShowDetail;
