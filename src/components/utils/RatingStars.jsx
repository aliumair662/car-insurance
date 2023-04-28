import React from 'react';
import PropTypes from 'prop-types';

const RatingStars = ({ rating, maxRating }) => {
  const fullStars = Math.floor(rating);
  const halfStars = Math.ceil(rating - fullStars);
  const emptyStars = maxRating - fullStars - halfStars;

  const renderStar = (type) => {
    switch (type) {
      case 'full':
        return <span>★</span>;
      case 'half':
        return <span>½</span>;
      case 'empty':
        return <span>☆</span>;
      default:
        return null;
    }
  };

  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(renderStar('full'));
  }
  for (let i = 0; i < halfStars; i++) {
    stars.push(renderStar('half'));
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(renderStar('empty'));
  }

  return <div>{stars}</div>;
};

RatingStars.propTypes = {
  rating: PropTypes.number.isRequired,
  maxRating: PropTypes.number.isRequired,
};

export default RatingStars;
