import React from "react";
import { string, arrayOf, func, shape } from "prop-types";
import "./ui.css";

const IconDiv = ({ EOSReactIcon, pushToNode, name, showName }) => (
  <div
    className="image-container"
    onClick={() => {
      pushToNode(EOSReactIcon({ size: "xxxl" }), name);
    }}
  >
    <span className="image-container-text">{showName}</span>
    {EOSReactIcon({ size: "26px" })}
  </div>
);

IconDiv.propTypes = {
  EOSReactIcon: func.isRequired,
  pushToNode: func.isRequired,
  name: string.isRequired,
  showName: string.isRequired,
};
const IconBox = ({ option, icons, pushToNode }) => {
  const iconDivs = icons.map(({ EOSReactIcon, name, showName }) => (
    <IconDiv
      key={name}
      EOSReactIcon={EOSReactIcon}
      pushToNode={pushToNode}
      name={name}
      showName={showName}
    />
  ));
  return (
    <div key={option} style={{ margin: "0px 0px 0px 10px" }}>
      <div className="category-container">
        <span>{option}</span>
      </div>
      <div className="image-box">{iconDivs}</div>
    </div>
  );
};

IconBox.propTypes = {
  option: string.isRequired,
  icons: arrayOf(shape({ EOSReactIcon: func, name: string })).isRequired,
  pushToNode: func.isRequired,
};

export default IconBox;
