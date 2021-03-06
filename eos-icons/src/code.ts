/// <reference path="../node_modules/@figma/plugin-typings/index.d.ts" />
figma.showUI(__html__);

figma.ui.onmessage = (msg) => {
  if (msg.type === "search-icons") {
    figma.ui.postMessage({
      type: "get-svg",
      searchText: msg.searchText,
    });
  }

  if (msg.type === "handle-icon") {
    const nodes: SceneNode[] = [];
    const icon = figma.createNodeFromSvg(msg.svg);
    icon.rescale(3);
    nodes.push(icon);
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
    figma.closePlugin();
  }
};
