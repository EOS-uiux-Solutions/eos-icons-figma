# eos-icons-figma

Figma extension for EOS-icons

## Contributing

- Follow the Figma plugin [prerequisites](https://www.figma.com/plugin-docs/prerequisites/) and [setup guide](https://www.figma.com/plugin-docs/setup/).
- Open the create a plugin page and select `Link existing plugin`.
- choose the `manifest.json` file from `eos-icons/manifest.json`.

## Steps to run it locally

Below are the steps to get your plugin running. You can also find instructions at:

https://www.figma.com/plugin-docs/setup/

This plugin template uses Typescript and NPM, two standard tools in creating JavaScript applications.

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
3. Run `npx webpack`.
4. Open `Figma`, click on `Main Menu`, and `Plugins`.
5. Select `Development` and `Create Plugin`.
6. Select `Link to Existing Plugin` and add the `manifest.json` from the folder.
7. Plugin has been added successfully now.
8. Click on `Menu Menu`, `Plugins`, `Development` and finally `eos-icons`.
