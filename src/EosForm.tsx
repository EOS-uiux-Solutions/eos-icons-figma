import React, { useState } from "react";
import { shape, func, instanceOf } from "prop-types";
import { EOS_CANCEL_OUTLINED } from "eos-icons-react";
import OptionsList from "./optionList.json";
import "./ui.css";

const iconOptions = ["All", "Outlined", "Filled"];
const EosForm = ({
  inputField,
  searchCategory,
  searchTheme,
  handleKeyUp,
  onSearch,
  clearValue,
}) => {
  const addOptions = ["All", ...OptionsList];
  const [category, setCategory] = useState<string>(addOptions[0]);
  const [theme, setTheme] = useState<string>(iconOptions[0]);
  const options = addOptions.map((el) => (
    <option value={el} key={el}>
      {el}
    </option>
  ));

  return (
    <div>
      <label htmlFor="searchInput" className="searchInput">
        <input
          ref={inputField}
          type="text"
          id="searchInput"
          placeholder="Search..."
          onKeyUp={handleKeyUp}
        />
        <div onClick={clearValue}>
          <EOS_CANCEL_OUTLINED size="sm" />
        </div>
      </label>
      <div className="select-container">
        <label htmlFor="category">
          <div className="label">
            <span>Category</span>
          </div>
          <select
            value={category}
            className="select-tag"
            ref={searchCategory}
            id="category"
            onChange={(event) => {
              setCategory(event.target.value);
              onSearch();
            }}
          >
            {options}
          </select>
        </label>
        <label htmlFor="theme">
          <div className="label">
            <span>Theme</span>
          </div>
          <select
            value={theme}
            className="select-tag"
            ref={searchTheme}
            onChange={(event) => {
              setTheme(event.target.value);
              onSearch();
            }}
          >
            {iconOptions.map((iconOption) => (
              <option key={iconOption} value={iconOption}>
                {iconOption}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="button-container">
        <button type="button" className="search" onClick={onSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

EosForm.propTypes = {
  inputField: shape({ current: instanceOf(HTMLInputElement) }).isRequired,
  searchCategory: shape({ current: instanceOf(HTMLSelectElement) }).isRequired,
  searchTheme: shape({ current: instanceOf(HTMLSelectElement) }).isRequired,
  handleKeyUp: func.isRequired,
  onSearch: func.isRequired,
  clearValue: func.isRequired,
};
export default EosForm;
