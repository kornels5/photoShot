import Tooltip from '@reach/tooltip';
import '@reach/tooltip/styles.css';
import React, { useState } from 'react';
import SearchIcon from './SearchIcon';

function SearchBar() {
  const [query, setQuery] = useState('');

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const search = (event.target as HTMLFormElement).search.value;
    setQuery(search);
  }

  return (
    <form onSubmit={(e) => handleSearch(e)} className="flex items-center">
      <input
        className="w-full border-solid border rounded border-gray-500 px-2 py-1"
        id="search"
        type="text"
        placeholder="Search image..."
      />
      <Tooltip label="search">
        <label htmlFor="search">
          <button>
            <SearchIcon className="text-gray-500 align-middle -ml-8 mt-1" />
          </button>
        </label>
      </Tooltip>
    </form>
  );
}

export default SearchBar;
