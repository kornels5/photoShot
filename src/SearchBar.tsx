import Tooltip from '@reach/tooltip';
import '@reach/tooltip/styles.css';
import SearchIcon from './SearchIcon';

function SearchBar() {
  return (
    <form className="flex items-center">
      <input
        className="w-full border-solid border rounded border-gray-500 px-2 py-1"
        id="search"
        type="text"
        placeholder="Search image..."
      />
      <Tooltip label="search">
        <label htmlFor="search">
          <button>
            <SearchIcon className="text-gray-500 align-middle -ml-8" />
          </button>
        </label>
      </Tooltip>
    </form>
  );
}

export default SearchBar;
