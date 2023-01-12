import PropTypes from "prop-types";
import "./SearchBar.css";

export default function SearchBar({ searchValue, setSearchValue }) {
  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Search...?"
        value={searchValue}
        onChange={handleSearchValue}
      />
    </form>
  );
}

SearchBar.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.string.isRequired,
};
