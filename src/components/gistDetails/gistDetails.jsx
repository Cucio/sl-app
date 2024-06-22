import React from 'react';
import './gistDetails.css';

const GistDetails = ({ gist }) => {
  return (
    <div className="gist-details">
      <h2>{gist.description || 'No description'}</h2>
      {Object.entries(gist.files).map(([filename, file]) => (
        <div key={filename} className="gist-file">
          <h3>{filename}</h3>
          <pre>{file.content}</pre>
        </div>
      ))}
    </div>
  )
}

export default GistDetails;