import { React, useState } from 'react';
import SearchBar from '../components/searchBar/searchBar';
import GistList from '../components/gistList/gistList';
import './search.css';

const Search = () => {
  const [gists, setGists] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (user) => {
    try {
      const response = await fetch(`https://api.github.com/users/${user}/gists`);
      const data = await response.json();

      console.log(data);
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