/// <reference path="../node_modules/@figma/plugin-typings/index.d.ts" />
figma.showUI(__html__, {
  width: 600,
  height: 600,
});

let prevLoc = figma.viewport.center.x;
let prevViewX = figma.viewport.center.x;
let prevViewY = figma.viewport.center.y;

function onViewPortChanged(iconWidth: number) {
  if (
    prevViewX !== figma.viewport.center.x ||
    prevViewY !== figma.viewport.center.y
  ) {
    // whether the scene is scrolled or not
    prevLoc = figma.viewport.center.x;
    prevViewX = figma.viewport.center.x;
    prevViewY = figma.viewport.center.y;
  } else prevLoc += iconWidth + spaceBtwIcon;
}

const spaceBtwIcon: number = 20;
figma.ui.onmessage = (msg: { type: string; svg: any; name: string }) => {
  if (msg.type === "handle-icon") {
    const icon = figma.createNodeFromSvg(msg.svg);
    icon.name = msg.name;
    onViewPortChanged(icon.width);
    icon.x = prevLoc;
    icon.y = figma.viewport.center.y;
    figma.currentPage.selection = [icon];
  }
};
