import React, { useState } from "react";
import { shape, func, instanceOf } from "prop-types";
import OptionsList from "./optionList.json";
import "./ui.css";

const iconOptions = ["All", "Outlined", "Filled"];
const EosForm = ({
  inputField,
  searchCategory,
  searchTheme,
  handleOnChange,
  onSearch,
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
      <div className="searchBar">
        <div style={{ margin: "auto 5 auto 5" }}>
          <img
            src="https://img.icons8.com/glyph-neue/24/000000/search--v1.png"
            alt=""
            style={{ width: 20, height: 20 }}
          />
        </div>
        <div className="inputField">
          <input
            ref={inputField}
            type="search"
            placeholder="Search"
            onChange={handleOnChange}
          />
        </div>
      </div>

      <div className="select-container">
        <div className="category">
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
        </div>
        <div className="theme">
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
        </div>
      </div>
    </div>
  );
};

EosForm.propTypes = {
  inputField: shape({ current: instanceOf(HTMLInputElement) }).isRequired,
  searchCategory: shape({ current: instanceOf(HTMLSelectElement) }).isRequired,
  searchTheme: shape({ current: instanceOf(HTMLSelectElement) }).isRequired,
  handleOnChange: func.isRequired,
  onSearch: func.isRequired,
};
export default EosForm;
