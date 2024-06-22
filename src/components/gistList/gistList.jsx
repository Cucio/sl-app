// src/components/GistList.js
import React from 'react';
import GistItem from '../gistItem/gistItem';
import './gistList.css';

const GistList = ({ gists, handleGistClick }) => {
  return (
    <div className="gist-list">
      {gists.map((gist) => (
        <GistItem key={gist.id} gist={gist} handleGistClick={handleGistClick} />
      ))}
    </div>
  );
};

export default GistList;