import React from "react";
import './SearchBox.styles.css'

function SearchBoxComponent({ onChangeHandler, placeholder, searchValue , className}) {
  return (
    <>
      <input
        className={`search-box ${className}`}
        type='search'
        placeholder={placeholder}
        value={searchValue}
        onChange={onChangeHandler}
      />
    </>
  );
}

export default SearchBoxComponent;
