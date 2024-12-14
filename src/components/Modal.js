import React from 'react';
import './Modal.css';

function Modal({ item, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{item.name}</h2>
        <p><strong>Category:</strong> {item.category}</p>
        <p><strong>Engagement Score:</strong> {item.likes + item.shares + item.comments}</p>
        <p><strong>Reach:</strong> {item.followers * (item.likes + item.shares + item.comments) / 100}</p>
        {/* <p><strong>Location:</strong> {item.location}</p> */}
        <p>Likes: {item.likes}</p>
        <p>Shares: {item.shares}</p>
        <p>Comments: {item.comments}</p>
        <p>Followers: {item.followers}</p>
        <p>Category: {item.category}</p>
        <p>Location: {item.location}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
