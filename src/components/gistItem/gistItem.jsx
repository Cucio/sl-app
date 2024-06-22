import React from 'react';
import './gistItem.css';

const GistItem = ({ gist }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="gist-item">
      <div className="gist-description">
        <h3>{gist.description || 'No description'}</h3>
        <p>Files: {Object.keys(gist.files).join(', ')}</p>
        <p>Created at: {formatDate(gist.created_at)}</p>
        <p>Updated at: {formatDate(gist.updated_at)}</p>
      </div>
      <div className="gist-link">
        <a href={gist.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
    </div>
  );
};

export default GistItem;