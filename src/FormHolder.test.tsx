import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import {
  EOS_10MP_FILLED,
  EOS_TYPING_ANIMATED,
  EOS_10MP_OUTLINED,
} from "eos-icons-react";
import FormHolder from "./FormHolder";
import IconBox from "./IconBox";

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

it("renders the form and surrounding helper texts", () => {
  const eosReactIcons = [
    { EOSReactIcon: EOS_10MP_FILLED, name: "10mp" },
    { EOSReactIcon: EOS_TYPING_ANIMATED, name: "typing" },
    { EOSReactIcon: EOS_10MP_OUTLINED, name: "10mpOutlined" },
  ];
  const eosDivs = (
    <IconBox option="Action" icons={eosReactIcons} pushToNode={() => {}} />
  );
  act(() => {
    render(
      <FormHolder
        inputField={{ current: null }}
        handleOnChange={() => {}}
        onSearch={() => {}}
        searchTheme={{ current: null }}
        searchCategory={{ current: null }}
        iconOptions={eosDivs}
      />,
      container
    );
  });
  expect(container.querySelectorAll(".image-container").length).toBe(3);
  expect(container.querySelectorAll(".select-tag")[0].value).toBe("All");
  expect(container.querySelectorAll(".select-tag")[1].value).toBe("All");
});

it("no options being shown", () => {
  act(() => {
    render(
      <FormHolder
        inputField={{ current: null }}
        handleOnChange={() => {}}
        onSearch={() => {}}
        searchTheme={{ current: null }}
        searchCategory={{ current: null }}
      />,
      container
    );
  });
  expect(container.querySelectorAll(".image-container").length).toBe(0);
});
