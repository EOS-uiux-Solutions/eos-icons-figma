import React from "react";
import { any, func, shape, instanceOf } from "prop-types";
import EosForm from "./EosForm";

const FormHolder = ({
  inputField,
  handleKeyUp,
  onSearch,
  searchTheme,
  searchCategory,
  clearValue,
  iconOptions = null,
}) => (
  <div className="iconDialog">
    <h1 className="h1">
      <img
        src="https://eos-icons.com/static/media/eos-icons-logo.b8cf23f8.svg"
        alt="Company Logo"
        className="logo"
      />
    </h1>
    <hr />
    <p>Click on the icon to copy it</p>
    <EosForm
      inputField={inputField}
      handleKeyUp={handleKeyUp}
      onSearch={onSearch}
      searchTheme={searchTheme}
      searchCategory={searchCategory}
      clearValue={clearValue}
    />
    {iconOptions}
  </div>
);

FormHolder.propTypes = {
  inputField: shape({ current: instanceOf(HTMLInputElement) }).isRequired,
  searchCategory: shape({ current: instanceOf(HTMLSelectElement) }).isRequired,
  searchTheme: shape({ current: instanceOf(HTMLSelectElement) }).isRequired,
  handleKeyUp: func.isRequired,
  onSearch: func.isRequired,
  clearValue: func.isRequired,
  iconOptions: any,
};
FormHolder.defaultProps = {
  iconOptions: null,
};
export default FormHolder;
