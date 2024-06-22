import React from 'react';
import GistItem from '../gistItem/gistItem';
import './gistList.css';

const GistList = ({ gists }) => {
  return (
    <div className="gist-list">
      {gists.map((gist) => (
        <GistItem key={gist.id} gist={gist} />
      ))}
    </div>
  );
};

export default GistList;