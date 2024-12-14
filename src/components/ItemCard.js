// ItemCard.js
import React from 'react';
import './ItemCard.css';

function ItemCard({ item, onViewDetails }) {
  return (
    <div className="item-card">
      <h3>{item.name}</h3>
      <div className="engagement-score">Engagement Score: {item.likes + item.shares + item.comments}</div>
      <div className="reach">Reach: {(item.followers * (item.likes + item.shares + item.comments)) / 100}</div>
      <div className="category">{item.category}</div>
      <div className="location">{item.location}</div>
      <button onClick={() => onViewDetails(item)}>View Details</button>
    </div>
  );
}

export default ItemCard;
