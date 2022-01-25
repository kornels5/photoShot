import Tooltip from '@reach/tooltip';
import '@reach/tooltip/styles.css';
import React, { useEffect, useState } from 'react';
import { Basic } from 'unsplash-js/dist/methods/photos/types';

import SearchIcon from './SearchIcon';
import PhotoGrid from './PhotoGrid';
import api from './api/createApi';

function SearchBar() {
  const [query, setQuery] = useState('');
  const [error, setError] = React.useState(null);
  const [data, setPhotosResponse] = useState<{
    results?: Basic[] | undefined;
    status?: 'idle' | 'pending' | 'resolved' | 'rejected';
  }>({ status: 'idle' });
  const { status, results } = data;

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const search = (event.target as HTMLFormElement).search.value;
    setQuery(search);
  }

  useEffect(() => {
    api.search
      .getPhotos({ query, orientation: 'landscape' })
      .then((result) => {
        setPhotosResponse({
          results: result.response?.results,
          status: 'resolved',
        });
      })
      .catch((error) => {
        setError(error);
        setPhotosResponse({ status: 'rejected' });
      });
  }, [query]);

  return (
    <div>
      <form onSubmit={handleSearch} className="flex items-center">
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

      {status === 'rejected' ? (
        <div className="text-red-700">
          <p>There was an error:</p>
          <pre>{error && (error as Error).message}</pre>
        </div>
      ) : null}

      {status === 'resolved' && data.results ? (
        <PhotoGrid photos={data.results} />
      ) : null}
    </div>
  );
}

export default SearchBar;
