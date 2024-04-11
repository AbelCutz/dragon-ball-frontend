import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ handleSearchSubmit }) => {
  const [ballId, setBallId] = useState("");

  const handleInputChange = (e) => {
    setBallId(e.target.value);
  };

  const handleSearch = (e) => {
    if (ballId === "") {
      return;
    }
    e.preventDefault();
    handleSearchSubmit(ballId);
    setBallId("");
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        className="search-bar__input"
        onChange={handleInputChange}
        type="text"
        placeholder="Search"
        value={ballId}
      ></input>
      <button className="search-bar__btn" type="submit">
        Search!
      </button>
    </form>
  );
};

export default SearchBar;
