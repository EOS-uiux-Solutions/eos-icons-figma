import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import EosForm from "./EosForm";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders the form", () => {
  const searchCategory = jest.fn();
  act(() => {
    render(
      <EosForm
        inputField={{ current: null }}
        handleOnChange={() => {}}
        onSearch={searchCategory}
        searchTheme={{ current: null }}
        searchCategory={{ current: null }}
      />,
      container
    );
  });
  const categoryInputField = document.querySelectorAll(".select-tag")[0];
  act(() => {
    categoryInputField.dispatchEvent(
      new MouseEvent("change", { bubbles: true })
    );
  });

  expect(searchCategory).toHaveBeenCalledTimes(1);
  const themeInputField = document.querySelectorAll(".select-tag")[1];
  act(() => {
    themeInputField.dispatchEvent(new MouseEvent("change", { bubbles: true }));
  });

  expect(searchCategory).toHaveBeenCalledTimes(2);
});
