import React, { useEffect, useState } from 'react';
import { formatDate } from '../../utils/dateUtils';
import './gistItem.css';

const GistItem = ({ gist }) => {
  const [forks, setForks] = useState([]);

  const renderFileTypes = (files) => {
    const fileTypes = new Set(Object.values(files).map(file => file.language));
    return Array.from(fileTypes).map(type => (
      <span key={type} className={`badge badge-${type.toLowerCase()}`}>{type}</span>
    ));
  };

  const fetchGistForks = async (forks_url) => {
    try {
      const response = await fetch(forks_url, {
        headers: {
          'Authorization': `token ${process.env.REACT_APP_ENCODED_GITHUB_TOKEN}`
        }
      });
      const data = await response.json();

      setForks(data);
    } catch (err) {
      console.error(err);
    }
  };

  const renderForks = () => {
    return forks
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      .slice(0, 3).map(fork => (
        <div key={fork.id} className="fork-item">
          <img src={fork.owner.avatar_url} alt="Avatar" className='avatar' />
          <p>{fork.owner.login} - {formatDate(fork.created_at)}</p>
        </div>
      ));
  };

  useEffect(() => {
    fetchGistForks(gist.forks_url);
  }, [gist.forks_url]);

  return (
    <div className="gist-item">
      <div className="gist-description">
        <h3>{gist.description || 'No description'}</h3>
        <p>Files: {Object.keys(gist.files).join(', ')}</p>
        <p>Created at: {formatDate(gist.created_at)}</p>
        <p>Updated at: {formatDate(gist.updated_at)}</p>
        {
          forks && forks.length === 0 ? null
            :
            <div>
              <p>Latest forks:</p>
              <ul>
                {renderForks()}
              </ul>
            </div>
        }
        {
          gist.files.length === 0 ? null :
            <div className="file-types">
              {renderFileTypes(gist.files)}
            </div>
        }
      </div>
      <div className="gist-link">
        <a href={gist.html_url}>View on GitHub</a>
      </div>
    </div>
  );
};

export default GistItem;