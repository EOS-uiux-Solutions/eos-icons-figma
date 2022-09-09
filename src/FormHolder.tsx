import React from "react";
import { any, func, shape, instanceOf } from "prop-types";
import { EOS_INFO_FILLED } from "eos-icons-react";
import EosForm from "./EosForm";
import Logo from "./assets/eos-icon.svg";

const FormHolder = ({
  inputField,
  handleOnChange,
  onSearch,
  searchTheme,
  searchCategory,
  iconOptions = null,
}) => (
  <div className="iconDialog">
    <div style={{ textAlign: "center" }}>
      <h1 style={{ margin: "10px 0px 10px 10px" }}>
        <img src={Logo} alt="Company Logo" style={{ width: "100px" }} />
      </h1>
    </div>
    <div className="eos-form">
      <EosForm
        inputField={inputField}
        handleOnChange={handleOnChange}
        onSearch={onSearch}
        searchTheme={searchTheme}
        searchCategory={searchCategory}
      />
    </div>
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
  handleOnChange: func.isRequired,
  onSearch: func.isRequired,
  iconOptions: any,
};
FormHolder.defaultProps = {
  iconOptions: null,
};
export default FormHolder;
