import React from 'react';
import { Link } from 'react-router';

const ClubCard = ({club}) => {
  const {image,title,_id} = club;
 
  return (
    <div className="card bg-base-100 w-96 lg:ml-25 mt-5 border shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={image}
      alt="Shoes"
      className="rounded-xl w-60 h-50 border" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p></p>
    <div className="card-actions">
      <Link to={`/clubDetails/${_id}`} className="btn btn-primary">
  View Details
</Link>
    
    </div>
  </div>
</div>
 
  );
};

export default ClubCard;