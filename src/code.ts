/// <reference path="../node_modules/@figma/plugin-typings/index.d.ts" />
figma.showUI(__html__, {
  width: 600,
  height: 600,
});

let prevLoc = figma.viewport.center.x;
const spaceBtwIcon: number = 20;
figma.ui.onmessage = (msg: { type: string; svg: any; name: string }) => {
  if (msg.type === "handle-icon") {
    const icon = figma.createNodeFromSvg(msg.svg);
    icon.name = msg.name;
    icon.x = prevLoc;
    prevLoc += icon.width + spaceBtwIcon;
    icon.y = figma.viewport.center.y;
    figma.currentPage.selection = [icon];
  }
};
