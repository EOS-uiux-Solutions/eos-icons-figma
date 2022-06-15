# Figma extension for EOS-icons

[![build-run](https://github.com/EOS-uiux-Solutions/eos-icons-figma/actions/workflows/build.yml/badge.svg)](https://github.com/EOS-uiux-Solutions/eos-icons-figma/actions/workflows/build.yml) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![codecov](https://codecov.io/gh/EOS-uiux-Solutions/eos-icons-figma/branch/main/graph/badge.svg?token=RD0A0TQQ3B)](https://codecov.io/gh/EOS-uiux-Solutions/eos-icons-figma)

## Guidelines to run the plugin locally

Below are the steps to get your plugin running

The plugin uses Typescript and NPM, two standard tools in creating JavaScript applications.

First, download Node.js which comes with NPM. This will allow you to install TypeScript and other
libraries. You can find the download link here:

https://nodejs.org/en/download/

Next, install TypeScript using the command:

`npm install -g typescript`

Finally, in the directory of your plugin, run:

`npm install`

If you are familiar with JavaScript, TypeScript will look very familiar. In fact, valid JavaScript code
is already valid Typescript code.

TypeScript adds type annotations to variables. This allows code editors such as Visual Studio Code
to provide information about the Figma API while you are writing code, as well as help catch bugs
you previously didn't notice.

For more information, visit https://www.typescriptlang.org/

Using TypeScript requires a compiler to convert TypeScript (code.ts) into JavaScript (code.js)
for the browser to run.

We recommend writing TypeScript code using Visual Studio code:

1. Download Visual Studio Code if you haven't already: https://code.visualstudio.com/.
2. Open this directory in Visual Studio Code.
3. Run `npm run build`.
4. Open `Figma`, click on `Main Menu`, and `Plugins`.
5. Select `Development` and `Import Plugins from manifest`.
6. Add the `manifest.json` from the project folder.
7. Plugin has been added successfully now.
8. Click on `Menu Menu`, `Plugins`, `Development` and finally `eos-icons`.

## Keeping up with the Test Files

To make sure the test files are working correctly after the latest changes, run the following command: `npm test`

## JS and CSS Quality Assurance

Before submitting a PR/MR make sure your code is compliant with our JS and CSS rules by running: `npx prettier --check .`

If you encounter any deploy error in JS try fixing it by running `npx prettier --write .`
