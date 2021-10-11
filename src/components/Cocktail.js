import React from 'react';
import { Link } from 'react-router-dom';

const Cocktail = ({ id, name, image, glass }) => {
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <Link to={`/cocktail/${id}`} className='btn btn-primary btn-details'>
          Detalhes
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
