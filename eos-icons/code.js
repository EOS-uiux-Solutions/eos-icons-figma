figma.showUI(__html__);
figma.ui.onmessage = (msg) => {
  if (msg.type === "search-icons") {
    figma.ui.postMessage({
      type: "get-svg",
      searchText: msg.searchText,
    });
  }
  if (msg.type === "handle-icon") {
    const nodes = [];
    const icon = figma.createNodeFromSvg(msg.svg);
    icon.rescale(3);
    nodes.push(icon);
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
    figma.closePlugin();
  }
};
