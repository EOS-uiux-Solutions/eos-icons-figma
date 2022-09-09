import React, { useState } from "react";
import { shape, func, instanceOf } from "prop-types";
import SearchIcon from "./assets/search.svg";
import OptionsList from "./optionList.json";
import Info from "./assets/info.svg";
import Logo from "./assets/eos-icon.svg";
import "./ui.css";

const iconOptions = ["All", "Outlined", "Filled"];
const capitalizeLetter = (string) =>
  string.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
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
      {capitalizeLetter(el)}
    </option>
  ));

  return (
    <div>
      <div className="search-bar">
        <div style={{ margin: "8px 2px 8px 10px" }}>
          <img
            src={SearchIcon}
            alt="maginifying glass"
            style={{ width: "15px", height: "15px" }}
          />
        </div>
        <div className="input-field">
          <input
            ref={inputField}
            type="search"
            placeholder="Search"
            onChange={handleOnChange}
          />
        </div>
        <div className="eos-info-container">
          <img
            src={Info}
            alt="information"
            style={{ width: "20px", height: "20px" }}
          />
          <div className="eos-info">
            <br />
            <img src={Logo} alt="eos-logo" />
            <br />
            <br />
            Open source, customisable, including all of Material icons.
            <br />
            <br />
            For more information, visit :{" "}
            <a href="https://eos-icons.com" target="_blank" rel="noreferrer">
              https://eos-icons.com
            </a>
            <table style={{ fontSize: "12px", width: "100%", padding: "10px" }}>
              <tr>
                <td>
                  <span>
                    author :{" "}
                    <a
                      href="https://eosdesignsystem.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      EOS UX/UI
                    </a>
                  </span>
                </td>
                <td>
                  <p>license : MIT</p>
                </td>
              </tr>
              <tr>
                <td> version : 1.0.0</td>
                <td>
                  {" "}
                  <a
                    href="https://github.com/EOS-uiux-Solutions/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Report a bug
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://slack.eosdesignsystem.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Join us on Slack
                  </a>
                </td>
                <td>
                  <a
                    href="https://www.npmjs.com/package/eos-icons"
                    target="_blank"
                    rel="noreferrer"
                  >
                    EOS Icons npm
                  </a>
                </td>
              </tr>
            </table>
          </div>
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
