import { React, useState } from 'react';
import SearchBar from '../components/searchBar/searchBar';
import GistList from '../components/gistList/gistList';
import './search.css';

const Search = () => {
  const [gists, setGists] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (user) => {
    try {
      const response = await fetch(`https://api.github.com/users/${user}/gists`, {
        headers: {
          'Authorization': `token ${process.env.REACT_APP_ENCODED_GITHUB_TOKEN}`
        }
      });
      const data = await response.json();

      setGists(data);
      setSearched(true)
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h1 className="search-title">Search Gists By Username</h1>
      <SearchBar handleSearch={handleSearch} />
      {
        searched && gists.length === 0
          ? <p className="no-gists-message">No gists found.</p>
          : <GistList gists={gists} />
      }
    </>
  );
};

export default Search;