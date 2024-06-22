import { React, useState } from 'react';
import SearchBar from '../components/searchBar/searchBar';
import GistList from '../components/gistList/gistList';
import GistDetails from '../components/gistDetails/gistDetails';
import Modal from '../components/modal/modal';
import './search.css';

const Search = () => {
  const [gists, setGists] = useState([]);
  const [searched, setSearched] = useState(false);
  const [selectedGist, setSelectedGist] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = async (user) => {
    try {
      const response = await fetch(`https://api.github.com/users/${user}/gists`, {
        headers: {
          'Authorization': `token ${process.env.REACT_APP_ENCODED_GITHUB_TOKEN}`
        }
      });
      const data = await response.json();

      console.log(data);
      setGists(data);
      setSearched(true)
    } catch (err) {
      console.error(err);
    }
  };

  const handleGistClick = async (gistId) => {
    try {
      const response = await fetch(`https://api.github.com/gists/${gistId}`, {
        headers: {
          'Authorization': `token ${process.env.REACT_APP_ENCODED_GITHUB_TOKEN}`
        }
      });
      if (!response.ok) {
        throw new Error('Gist not found');
      }

      const data = await response.json();

      setSelectedGist(data);
      setIsModalOpen(true);
    } catch (err) {
      console.error(err);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedGist(null);
  };

  return (
    <>
      <h1 className="search-title">Search Gists By Username</h1>
      <SearchBar handleSearch={handleSearch} />
      {
        searched && gists.length === 0
          ? <p className="no-gists-message">No gists found.</p>
          : <GistList gists={gists} handleGistClick={handleGistClick} />
      }
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedGist && <GistDetails gist={selectedGist} />}
      </Modal>
    </>
  );
};

export default Search;