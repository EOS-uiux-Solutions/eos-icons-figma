/// <reference path="../node_modules/@figma/plugin-typings/index.d.ts" />
figma.showUI(__html__, {
  width: 600,
  height: 600,
});

figma.ui.onmessage = (msg) => {
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
