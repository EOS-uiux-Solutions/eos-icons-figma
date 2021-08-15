import React from "react";
import { any, func, shape, instanceOf } from "prop-types";
import { EOS_INFO_FILLED } from "eos-icons-react";
import EosForm from "./EosForm";
import Logo from "./assets/eos-icon.svg";

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
      <img src={Logo} alt="Company Logo" className="logo" />
    </h1>
    <hr />
    <EosForm
      inputField={inputField}
      handleKeyUp={handleKeyUp}
      onSearch={onSearch}
      searchTheme={searchTheme}
      searchCategory={searchCategory}
      clearValue={clearValue}
    />
    <hr style={{ margin: "25px 0 0" }} />
    <div className="info-box">
      <EOS_INFO_FILLED />
      <p>Click on the icon to copy it</p>
    </div>
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
