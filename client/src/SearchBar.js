import React from 'react';
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="search__bar__mobile">
      <div className="header__search__mobile">
        <input className="header__searchInput__mobile" type="text" />
        <SearchIcon className="header__searchIcon__mobile" />
      </div>
    </div>
  );
}

export default SearchBar