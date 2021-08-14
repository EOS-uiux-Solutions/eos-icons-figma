/// <reference path="../node_modules/@figma/plugin-typings/index.d.ts" />
figma.showUI(__html__, {
  width: 600,
  height: 600,
});

figma.ui.onmessage = (msg: { type: string; svg: any; name: string }) => {
  if (msg.type === "handle-icon") {
    const nodes: SceneNode[] = [];
    const icon = figma.createNodeFromSvg(msg.svg);
    icon.name = msg.name;
    icon.rescale(3);
    nodes.push(icon);
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
    figma.closePlugin();
  }
};
